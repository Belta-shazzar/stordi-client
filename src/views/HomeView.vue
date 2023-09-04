<script setup></script>

<template>
  <div class="container flex flex-col min-h-screen justify-center items-center">
    <h1 class="text-secondary text-5xl font-bold mb-5">
      Stord <i class="text-accent fa-solid fa-pen"></i>
    </h1>
    <p class="font-medium">We help you make studying seamless</p>
    <div class="flex gap-3 mt-5">
      <RouterLink class="hover:underline pb-2" to="/sign-up">sign up</RouterLink>
      <RouterLink class="hover:underline pb-2" to="/sign-in">sign in</RouterLink>
    </div>
  </div>
</template>
