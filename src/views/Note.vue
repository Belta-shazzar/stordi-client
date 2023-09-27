<template>
  <div>
    <!-- <AuthNavbar /> -->
    <div class="flex w-screen h-screen overflow-hidden">
      <Sidebar class="w-[20%] hidden lg:block bg-accent text-white" />
      <NoteList class="w-full lg:w-[35%]" />
      <NoteContent class="w-[45%] hidden lg:block" />

      <!-- <div v-for="note in notes" :key="note._id">
        {{ note }}
      </div> -->
    </div>
  </div>
</template>

<script setup>
import NoteList from "../components/layout/NoteList.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import NoteContent from "../components/layout/NoteContent.vue";
</script>

<style scoped></style>
