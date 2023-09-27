<template>
  <div class="">
    <div class="px-8 pt-8 mb-10">
      <div class="deet flex justify-between items-center mb-5">
        <span class="flex items-center">
          <h3 class="mr-2 bg-hover p-2 rounded-full font-semibold">
            {{ initials }}
          </h3>
          <p class="font-semibold">{{ fullName }}</p>
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
          v-for="category in categories"
          :key="category._id"
          class="category flex justify-between hover:bg-hover px-8 py-4"
        >
          <p>{{ category.name }}</p>
          <p class="cat-num">{{ category.size }}</p>
        </div>
        <!-- <div v-else>
          <p class="font-semibold">Add a category</p>
        </div> -->
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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

onMounted(async () => {
  const response = await axios.get("/category")

  await store.dispatch("categories", response.data.data.categories);
  console.log('on load categories: ', response.data.data.categories)
})

const user = store.getters.user.data;
const categories = computed(() => store.getters.categories);
console.log('categories: ', categories)

const showLogout = ref(false);

const initials = computed(() => {
  return user.firstname.charAt(0) + user.lastname.charAt(0);
});

const fullName = computed(() => {
  return `${user.firstname} ${user.lastname}`;
});

const sidebarToggle = () => {
  showLogout.value = !showLogout.value;
};


const logout = () => {
  store.dispatch("removeUser");
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
  background-color: #9fdad7;
  border-radius: 3px;
}
</style>
