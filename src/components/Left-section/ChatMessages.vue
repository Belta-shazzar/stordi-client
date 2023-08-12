<template>
  <div>
    <div v-for="message in messages" :key="message.id" class="p-4">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
  props: {
    messages: Array
  }
}
</script>
