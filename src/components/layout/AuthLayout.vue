<template>
  <div class="">
    <!-- <AuthNavbar /> -->
    <main className="bg-primary flex justify-center items-center w-full h-screen py-8">
        <slot />
    </main>
  </div>
</template>

<script setup>
import AuthNavbar from "../navbar/AuthNavbar.vue";
</script>
