<template>
  <div class="text-secondary">
    <!-- <div class="head bg-red-400 px-12 pt-8"> -->
    <div class="head px-12 pt-8">
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
        v-for="index in 10"
        :key="index"
        class="list-item px-12 py-5 text-secondary border-b-2"
      >
        <div class="">
          <h1 class="text-lg font-semibold capitalize mb-1">Note Content {{ index }}</h1>
          <p class="truncate-text text-sm text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab esse consequuntur fugiat eius numquam, maiores labore, eveniet itaque iusto dolorem porro tenetur culpa. Amet ea quam voluptate consequuntur corporis.
          </p>

          <p class="text-sm text-gray-500 mt-3">10:06 AM August 13, 2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
