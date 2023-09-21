<template>
  <div class="">
    <div class="px-8 pt-8 mb-10">
      <div class="deet flex justify-between items-center mb-5">
        <span class="flex items-center">
          <h3 class="mr-2 bg-hover p-2 rounded-full font-semibold">DO</h3>
          <p>Daniel Oguejiofor</p>
        </span>
        <i @click="sidebarToggle" class="fa-solid fa-ellipsis-vertical cursor-pointer p-3"></i>
      </div>
      <div class="flex w-100 justify-center">
        <RouterLink
          to="/"
          v-show="showLogout"
          @click="logout"
          class="bg-red-400 hover:bg-red-300 px-8 py-2 rounded-md"
        >
          Log out
        </RouterLink>
      </div>
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

    <RouterLink to="/" class="flex gap-x-1 items-center justify-center text-hover tracking-[.1em]">
      <h1 className="font-extrabold text-lg">Stord</h1>
      <i class="fa-solid fa-pen"></i>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const showLogout = ref(false);
const store = useStore();

const sidebarToggle = () => {
  showLogout.value = !showLogout.value;
};

const logout = () => {
  localStorage.removeItem("token");
  const user = {
    data: {},
    token: null,
  };
  store.dispatch("user", user);
};
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
