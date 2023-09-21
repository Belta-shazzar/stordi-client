<template>
  <div>
    <!-- <AuthNavbar /> -->
    <div class="flex w-screen h-screen overflow-hidden">
        <Sidebar class="w-[20%] bg-accent text-white" />
        <NoteList class="w-[35%]" />
        <NoteContent class="w-[45%]"/>
    </div>
  </div>
</template>

<script setup>
import NoteList from "../components/layout/NoteList.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import NoteContent from "../components/layout/NoteContent.vue";


</script>

<style scoped></style>
