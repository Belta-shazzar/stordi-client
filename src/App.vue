<template>
  <div id="app" class="bg-gray-100">
    <NavBar />
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from "./components/Left-section/ChatWindow.vue";
import NavBar from "./components/Left-section/Navbar.vue"; 

export default {
  name: "App",
  components: {
    ChatWindow,
    NavBar,
  },
};
</script>
