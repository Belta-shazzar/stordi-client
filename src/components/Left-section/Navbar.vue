<template>
  <nav class="bg-white/50 p-5 border-b border-gray-200">
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-[#32A8A0] text-2xl font-semibold">App Logo</div>
      <div class="hidden md:flex items-center space-x-4 ">
        <button class="text-white uppercase hover:text-[#333333] bg-[#32A8A0] hover:bg-[#9FDAD7] px-5 py-1 rounded-md">ADD</button>
        <button class="text-white uppercase hover:text-[#333333] bg-[#32A8A0] hover:bg-[#9FDAD7] px-5 py-1 rounded-md">Delete</button>
        <button class="text-white uppercase hover:text-[#333333] bg-[#32A8A0] hover:bg-[#9FDAD7] px-5 py-1 rounded-md">Settings</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
</style>
