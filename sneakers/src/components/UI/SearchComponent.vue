<script setup>
import {ref} from "vue";

defineProps({
  isSearching: {
    type: Boolean,
    required: false,
    default: false
  },
});
let query = ref('');

</script>

<template>
  <div class="border rounded-md flex hover:border-gray-400 justify-between items-center h-full">
    <input class="py-2 pl-10 pr-4 outline-0 border-0"
           placeholder="Search..."
           v-model="query"
           @input="$emit('search', query, 'query')"/>
    <i v-if="!isSearching" class="pi pi-search mr-5 opacity-20" style="color: #708090"></i>
    <i v-else class="pi pi-spin pi-spinner mr-5 opacity-20" style="color: #708090"></i>
  </div>
</template>

<style scoped>

</style>