<template>
  <div id="app" class="bg-primary">
    <AuthNavbar />
    <ChatWindow />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import ChatWindow from "./components/Left-section/ChatWindow.vue";
import NavBar from "./components/Left-section/Navbar.vue"; 
import AuthNavbar from "./components/navbar/AuthNavbar.vue";

// export default {
//   name: "App",
//   components: {
//     ChatWindow,
//     NavBar,
//   },
// };
</script>
