<script setup>
const item = defineProps({
  id: String,
  imageUrl: String,
  fullname: String,
  price: Number,
  size: Number,
  count: Number
})

</script>

<template>
  <div class="border border-[#EAEAEA] p-4 rounded-xl
  flex justify-between items-center gap-5">
    <img class="w-16 h-16" :src="imageUrl" alt="sneakers"/>

    <div class="flex flex-col">
      <div class="flex justify-between gap-4">
        <p>{{ fullname }}</p>
        <img src="/close.svg" alt="delete" class="opacity-40 hover:opacity-100"
             @click="$emit('remove', item)"/>
      </div>
      <b>{{ price }} ₽.</b>
      <div class="flex gap-5 mt-2">
        <span class="text-slate-400">Size: {{ size }}</span>
        <span class="text-slate-400">Count: {{ count }}</span>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>