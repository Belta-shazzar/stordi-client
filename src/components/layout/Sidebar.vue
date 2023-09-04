<template>
  <div class="">
    <div class="deet flex justify-between items-center mb-20 px-8 pt-8">
      <span class="flex items-center">
        <h3 class="mr-2 bg-hover p-2 rounded-full font-semibold">DO</h3>
        <p>Daniel Oguejiofor</p>
      </span>
      <i class="fa-solid fa-ellipsis-vertical cursor-pointer p-3"></i>
    </div>

    <div class="">
      <span class="flex justify-between items-center mb-10 px-8">
        <h3 class="font-semibold tracking-[.3em]">CATEGORIES</h3>
        <i class="fa-solid fa-plus cursor-pointer p-3"></i>
      </span>

      <div class="categories overflow-auto h-96 border-y-2 border-[#9fdad7] mb-10">
        <div
          v-for="index in 18"
          :key="index"
          class="category flex justify-between hover:bg-hover px-8 py-4"
        >
          <p>General</p>
          <p class="cat-num">27</p>
        </div>
      </div>
    </div>

    <div class="px-8 flex justify-between items-center mb-20">
      <h3 class="font-semibold tracking-[.1em]">TRASH</h3>
      <i class="fa-regular fa-trash-can text-xl cursor-pointer p-3"></i>
    </div>

    <div class="flex gap-x-1 items-center justify-center text-hover tracking-[.1em]">
      <h1 className="font-extrabold text-lg">Stord</h1>
      <i class="fa-solid fa-pen"></i>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.category:hover .cat-num {
  background-color: #32a8a0;
  padding: 1px 8px;
  border-radius: 14px;
  margin-right: -7px;
}

.categories::-webkit-scrollbar {
  width: 5px;
}

.categories::-webkit-scrollbar-thumb {
  background-color: #9fdad7; /* Set the color of the thumb */
  border-radius: 3px; /* Add rounded corners to the thumb */
}
</style>
