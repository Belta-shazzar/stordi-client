<template>
  <div class="bg-primary h-screen overflow-y-auto">
    <!-- <div class="flex justify-center px-5 mb-3">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search notes"
        class="p-2 w-4/5 bg-transparent border-b focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
    </div> -->
    <div>
      <div
        v-for="index in 10"
        :key="index"
        class="bg-white p-5 m-3 border-l-4 rounded-s-none hover:bg-[#e5e5e5f5] rounded-xl"
      >
        <div class="">
          <h1 class="text-lg font-semibold capitalize mb-1">Note Content {{ index }}</h1>
          <p class="truncate-text text-sm text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et molestiae voluptate animi magnam. Adipisci voluptas tenetur maiores nam? Est nihil quidem ducimus laudantium esse deserunt, illo facilis quo natus.
          </p>

          <p class="text-sm text-gray-500 mt-3">
            10:06 AM August 13, 2023
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// export default {
//   name: "App",
//   components: {
//     ChatWindow,
//     NavBar,
//   },
// };
</script>

<style scoped>
.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
