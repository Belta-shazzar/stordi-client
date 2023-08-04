<template>
  <div>
    <AuthNavbar />
    <main className="bg-primary w-full h-screen px-4 py-8">
        <slot />
    </main>
  </div>
</template>

<script setup>
import AuthNavbar from "../navbar/AuthNavbar.vue";
</script>
