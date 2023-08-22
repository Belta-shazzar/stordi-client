<template>
  <AuthLayout>
    <div class="flex justify-center bg-white px-4 py-12 rounded-md md:mx-[400px]">
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

          <div className="email flex flex-col mb-4">
            <label htmlFor="password" className="text-sm font-medium text-[#828FA3] pb-2">
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
            <span v-if="passErr" class="text-sm text-error"
              >password should be more than 7 characters</span
            >
          </div>
          <AuthButton>Sign Up</AuthButton>
        </form>
      </div>

      <!-- <h1>Hello</h1> -->
    </div>
  </AuthLayout>
</template>

<script setup>
import { ref } from "vue";
import AuthLayout from "../components/layout/AuthLayout.vue";
import AuthButton from "../components/buttons/AuthButton.vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter()
const fullName = ref("");
const email = ref("");
const password = ref("");
const emptyFieldErr = ref(false);
const passErr = ref(false);

const handleSubmit = async () => {
  if (fullName.value.trim().length < 3 || email.value.trim().length < 3) {
    emptyFieldErr.value = true;
    return;
  }

  if (password.value.trim().length < 7) {
    passErr.value = true;
    return;
  }

  const reqBody = {
    fullname: fullName.value,
    email: email.value,
    password: password.value,
  };

  axios
    // .post(`${process.env.BASEURL}/api/v1/auth/sign-up`, { ...reqBody })
    .post("http://localhost:7000/api/v1/auth/sign-up", { ...reqBody })
    .then(function (response) {
      if (response.data.success) {
        router.push({ name: 'notes' });
      } else {
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>

<style lang="scss" scoped></style>
