<template>
  <AuthNavbar />
  <div class="flex h-screen p-5 gap-y-4">
    <div class="md:w-2/5">
      <div class="flex justify-between px-5 mb-3">
        <input
          type="text"
          v-model="searchQuery"
          @input="getSearchResults"
          placeholder="Search notes"
          class="p-2 w-4/5 bg-transparent border-b focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        />

        <div>
          <button class="rounded-full px-3 py-2 mt-5">
            <i class="fa-solid fa-plus text-3xl text-secondary"></i>
          </button>
        </div>
      </div>
      <NoteList />
    </div>
    
    <div class="w-full ml-5">
      <NoteContent />
    </div>
  </div>
</template>

<script setup>
import NoteContent from "../components/layout/NoteContent.vue";
import NoteList from "../components/layout/NoteList.vue";
import AuthNavbar from "../components/navbar/AuthNavbar.vue";
</script>

<style lang="scss" scoped></style>
