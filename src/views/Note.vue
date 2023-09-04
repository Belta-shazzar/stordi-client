<template>
  <div>
    <!-- <AuthNavbar /> -->
    <div class="flex">
        <Sidebar class="basis-2/12 bg-accent h-screen text-white" />
        <div class="basis-4/12 h-screen"></div>
        <div class="basis-6/12 bg-blue-400 h-screen"></div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/layout/Sidebar.vue";
import AuthNavbar from "../components/navbar/AuthNavbar.vue";
</script>

<style lang="scss" scoped></style>
