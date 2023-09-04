<template>
  <div>
    <QuillEditor theme="snow" toolbar="essential" class="rounded-xl w-full h-full outline-none p-4 text-lg font-normal text-secondary bg-white" />
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
</script>

<style lang="scss" scoped></style>
