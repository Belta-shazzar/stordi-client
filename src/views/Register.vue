<template>
  <AuthLayout>
    <div
      class="flex justify-center bg-white w-[90%] lg:w-[40%] px-4 py-12 rounded-md -mt-[200px] md:mx-[400px]"
    >
      <div class="w-full">
        <form @submit.prevent="handleSubmit">
          <span v-if="emptyFieldErr" class="text-sm mb-1.5 text-error"
            >fields should be properly filled</span
          >
          <h2 className="text-secondary font-bold text-lg mb-6">Sign Up</h2>

          <div className="fullname flex flex-col mb-4">
            <label htmlFor="fullname" className="text-sm font-medium text-[#828FA3] pb-2">
              Fullname
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              v-model="fullName"
              className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
            />
          </div>

          <div className="email flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-medium text-[#828FA3] pb-2">
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

          <div className="password flex flex-col mb-4">
            <label htmlFor="password" className="text-sm font-medium text-[#828FA3] pb-2">
              Password
            </label>
            <input
              type="passwordd"
              name="password"
              id="password"
              v-model="password"
              placeholder="************"
              className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
            />
            <span v-if="passErr" class="text-sm text-error"
              >password should be more than 7 characters</span
            >
          </div>

          <!-- <div className="confirm_password flex flex-col mb-4">
            <span v-if="confPassErr" class="text-sm text-error"
              >confirm password does not match password</span
            >
            <label htmlFor="confirm_password" className="text-sm font-medium text-[#828FA3] pb-2">
              Confirm Password
            </label>
            <input
              type="passwordd"
              name="confirm_password"
              id="confirm_password"
              v-model="confirmPassword"
              placeholder="************"
              className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
            /> -->
          <!-- </div> -->
          <AuthButton>Sign Up</AuthButton>
          <RouterLink to="/sign-in">i have an account</RouterLink>
        </form>
      </div>

      <!-- <h1>Hello</h1> -->
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

const router = useRouter();
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const emptyFieldErr = ref(false);
const passErr = ref(false);
const confPassErr = ref(false);

const handleSubmit = async () => {
  if (fullName.value.trim().length < 3 || email.value.trim().length < 3) {
    emptyFieldErr.value = true;
    return;
  }

  if (password.value.trim().length < 7) {
    passErr.value = true;
    return;
  }

  // if (password.value !== confPassErr.value) {
  //   confPassErr.value = true;
  //   return;
  // }

  const reqBody = {
    fullname: fullName.value,
    email: email.value,
    password: password.value,
  };

  try {
    const response = await axios.post("/auth/sign-up", reqBody);
    console.log("Submitted");
    console.log(response);

    const handleResponse = await handleAuthResponse(response);

    if (handleResponse.success) {
      router.push({ name: "Notes" });
    } else {
      // display error modal
    }
  } catch (error) {}
};
</script>

<style lang="scss" scoped></style>
