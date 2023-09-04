<template>
  <div class="h-5/6">
    <p class="text-sm p-2 text-gray-500">Aug 23 08:12AM</p>
    <input
      type="text"
      name="title"
      id=""
      placeholder="Title..."
      class="w-full pt-12 px-4 pb-2 rounded-xl outline-none text-2xl mb-4 text-secondary"
    />
    <!-- <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="take note..."
      class="rounded-xl w-full h-full outline-none p-4 text-lg font-normal text-secondary"
    ></textarea> -->
    <Quill />
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
