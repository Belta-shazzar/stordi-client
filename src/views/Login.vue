<template>
    <AuthLayout>
      <div
        class="flex justify-center bg-white px-4 py-12 rounded-md md:mx-[400px]"
      >
        <div class="w-full">
          <form @submit="">
            <h2 className="text-secondary font-bold text-lg mb-6">Sign In</h2>
  
            <div className="email flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#828FA3] pb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                placeholder="stordi@example.com"
                onChange="{handleChange}"
                className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
              />
            </div>
  
            <div className="email flex flex-col mb-4">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#828FA3] pb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="************"
                onChange="{handleChange}"
                className="p-2 mb-2 outline-none border border-[#828FA340] rounded text-sm"
              />
            </div>
            <AuthButton>Sign In</AuthButton>
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
  
  const fullName = ref("");
  const email = ref("");
  const password = ref("");
  const emptyFieldErr = ref(false);
  const passErr = ref(false);
  
  const handleSubmit = () => {
    if (fullName.value.trim().length < 3 || email.value.trim().length < 3) {
      emptyFieldErr.value = true
      return;
    }
  
    if (password.value.trim().length < 7) {
      passErr.value = true
      return;
    }
  
    const reqBody = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
    }
  
    console.log(reqBody);
  }
  </script>
  
  <style lang="scss" scoped></style>
  