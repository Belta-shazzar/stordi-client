<template>
  <div>
    <QuillEditor theme="snow" toolbar="essential" class="outline-none p-4 text-lg tracking-wide leading-4 font-normal text-secondary bg-white" />
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import '@vueup/vue-quill/dist/vue-quill.bubble.css'
</script>

<style lang="scss" scoped></style>
