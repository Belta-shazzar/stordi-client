<template>
  <div class="text-secondary border-r-2">
    <!-- <div class="head bg-red-400 px-12 pt-8"> -->
    <div class="head px-8 lg:px-12 pt-8">
      <span class="flex justify-between items-end pb-10">
        <h2 class="text-3xl font-bold text-secondary">General</h2>
        <p class="text-xl">13 Notes</p>
      </span>
      <div class="pb-6">
        <span class="flex bg-gray-200 items-center justify-between px-3 py-2 rounded-md mb-5">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search Notes..."
            class="text-base basis-4/5 bg-transparent outline-none focus:bg-transparent"
          />
          <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
        </span>
        <button
          type="button"
          class="bg-accent hover:bg-hover w-full flex gap-3 text-white items-center justify-center px-3 py-2 rounded-md font-medium"
        >
          <i class="fa-solid fa-plus"></i>
          <p>ADD NOTE</p>
        </button>
      </div>
    </div>
    <div class="list border-t-2 overflow-auto h-[76%]">
      <div
        v-for="note in notes"
        :key="note._id"
        class="list-item px-8 lg:px-12 py-5 text-secondary border-b-2"
      >
        <div class="">
          <h1 class="text-lg font-semibold capitalize mb-1">{{ note.title }}</h1>
          <p class="truncate-text text-sm text-secondary">
            {{ note.body }}
          </p>

          <p class="text-sm text-gray-500 mt-3">{{ createdDate(note.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

onMounted(async () => {
  const response = await axios.get("/note");

  await store.dispatch("notes", response.data.data.notes);
  console.log("on load notes: ", response.data.data.notes);
});

const notes = store.getters.notes;
console.log("notes: ", notes);

const createdDate = computed((date) => {
  const dateToFormat = new Date(date);
  const dateString = dateToFormat.toLocaleString();
  // console.log(dateString);
  return dateString;
});
</script>

<style scoped>
.list::-webkit-scrollbar {
  width: 5px;
}
.list::-webkit-scrollbar-thumb {
  background-color: #c9c9c9; /* Set the color of the thumb */
  border-radius: 3px; /* Add rounded corners to the thumb */
}

.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

input:-webkit-autofill {
  /* Set a specific background color */
  background-color: transparent !important;
}
</style>
