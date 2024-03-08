<script setup>
import Message from "primevue/message";

defineProps({
  errorMessage: String,
  success: Boolean,
  successMessage: {
    type: String,
    default: 'Successful!'
  },
})
</script>

<template>
  <Message v-if="errorMessage" severity="error">
    {{errorMessage}}
  </Message>
  <Message v-if="success" severity="success">
    {{ successMessage }}
  </Message>
</template>

<style scoped>

</style>