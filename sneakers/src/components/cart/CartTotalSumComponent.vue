<script setup>

defineProps({
  sum: Number,
  sale: Number,
  total: Number
});

</script>

<template>
  <div class="flex flex-col gap-5 my-7">

    <div class="flex gap-2">
      <span>Sum: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{sum}} ₽.</b>
    </div>

    <div class="flex gap-2">
      <span>Sale: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{sale}} %</b>
    </div>

    <div class="flex gap-2">
      <span>Total: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b>{{total}} ₽.</b>
    </div>

  </div>

</template>

<style scoped>

</style>