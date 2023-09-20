<template>
  <div class="">
    <div class="head px-8 pt-10 pb-4 flex justify-between h-[10%]">
      <select name="category" id="category" class="py-2 px-4 rounded-md outline-none text-secondary">
        <option value="genera" class="border-b-2 text-secondary p-2">General</option>
        <option value="tech" class="border-b-2 text-secondary p-2">Tech</option>
        <option value="school" class="border-b-2 text-secondary p-2">School</option>
        <option value="personal" class="border-b-2 text-secondary p-6">Personal</option>
      </select>

      <button class="bg-accent text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-hover">SAVE</button>
    </div>
    <TextSpace class=" h-[89.899%]" />
  </div>
</template>

<script setup>
import TextSpace from "./TextSpace.vue";
</script>

<style lang="scss" scoped></style>
