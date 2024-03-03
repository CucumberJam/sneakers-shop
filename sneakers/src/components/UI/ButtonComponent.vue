<script setup>
defineProps({
  name: {
    type: String,
    required: true,
    default: 'Buy!'
  }
});

</script>

<template>
  <button @click="$emit('click')"
          class="bg-[#A5D364] w-44 h-12 rounded-lg text-white
          text-center uppercase font-bold flex justify-center items-center
          transition hover:bg-lime-600 active:bg-lime-800 cursor-pointer">
    <slot name="first"></slot>
    {{name}}
    <slot name="second"></slot>

  </button>
</template>

<style scoped>

</style>