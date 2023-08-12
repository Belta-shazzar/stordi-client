<template>
  <div class="flex h-screen">
    <!-- Add this line -->
    <div class="hidden md:flexy">ddddd</div>
    <!-- Sidebar -->
    <section class="md:w-1/4 bg-[#F7F7F7] overflow-y-auto">
      <!-- RHS Content -->
      <div>
        <div
          v-for="index in 10"
          :key="index"
          class="px-5 py-3 border-b hover:bg-[#e5e5e5f5] border-gray-300"
        >
          <div class="">
            <h1 class="text-lg font-semibold capitalize">
              Note Content {{ index }}
            </h1>
            <p class="truncate-text text-sm text-[#333333]">
              Some little content, Some little content Some little content Some
              little content Some little content
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Note Edit area -->
    <div class="hidden md:flex-1">
      <!-- Body -->
    </div>
    <SearchButton />
  </div>
</template>

<script>
import SearchButton from "../Left-section/SearchButton.vue";
export default {
  name: "ChatWindow",
  components: {
    SearchButton,
  },
};
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
