<template>
  <div class="h-full">
    <div class="px-8 pb-3">

      <input
      type="text"
      name="title"
      id=""
      placeholder="Title..."
      class="text-secondary bg-transparent outline-none w-full py-1 font-semibold text-xl border-b-[2px]"
      />
    </div>

    <Quill class="bg-accent mt-2 h-[88.5%]" />
  </div>
</template>

<script setup>
import Quill from './Quill.vue';
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
