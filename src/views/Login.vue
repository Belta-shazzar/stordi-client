<template>
  <AuthLayout>
    <div class="flex justify-center bg-white w-[90%] lg:w-[40%] px-4 py-12 lg:px-12 rounded-md -mt-[200px] md:mx-[400px]">
      <div class="w-full">
        <form @submit.prevent="handleSubmit">
          <h2 className="text-secondary font-bold text-lg mb-6 lg:text-4xl ">Sign In</h2>

          <div className="email flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-medium text-[#828FA3] pb-2 lg:text-2xl lg:pb-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email"
              placeholder="stordi@example.com"
              className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
            />
          </div>

          <div className="email flex flex-col mb-4">
            <label htmlFor="password" className="text-sm font-medium text-[#828FA3] pb-2 lg:text-2xl lg:pb-4">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="password"
              placeholder="************"
              className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
            />
          </div>
          <AuthButton>Sign In</AuthButton>
          <RouterLink class="text-secondary hover:underline" to="/sign-up">i don't have an account</RouterLink>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import AuthLayout from "../components/layout/AuthLayout.vue";
import AuthButton from "../components/buttons/AuthButton.vue";
import { handleAuthResponse } from "../utils";
// import { useStore } from "vuex";

const router = useRouter();
const email = ref("");
const password = ref("");
// const store = useStore();

const handleSubmit = async () => {
  const reqBody = {
    email: email.value,
    password: password.value,
  };
  try {
    const response = await axios.post("/auth/sign-in", reqBody);
    console.log("Submitted");
    console.log(response);

    const handleResponse = await handleAuthResponse(response);

    if (handleResponse.success) {
      router.push({ name: "Notes" });
    } else {
      // display error modal
    }

    // if (response.data.success) {
    //   const user = {
    //     data: response.data.data.user,
    //     token: response.data.data.token,
    //   };

    //   const token = `Bearer ${user.token}`;
    //   console.log("Here we go: ", token);
    //   await store.dispatch("addUser", user);
    //   await store.dispatch("notes", token);

    // }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
