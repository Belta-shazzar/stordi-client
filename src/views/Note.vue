<template>
  <div>
    <!-- <AuthNavbar /> -->
    <div class="flex w-screen">
        <Sidebar class="w-[18%] bg-accent h-screen text-white" />
        <NoteList class="w-[32%] h-screen" />
        <NoteContent class="w-[50%] bg-blue-400 h-screen" />
    </div>
  </div>
</template>

<script setup>
import NoteList from "../components/layout/NoteList.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import NoteContent from "../components/layout/NoteContent.vue";
</script>

<style lang="scss" scoped></style>
