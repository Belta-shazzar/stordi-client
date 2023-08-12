<template>
  <button class="fixed bottom-4 right-4 bg-[#32A8A0] text-white px-4 py-4 rounded-full shadow-lg">
    <font-awesome-icon icon="search" size="lg" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'SearchButton',
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
</style>
