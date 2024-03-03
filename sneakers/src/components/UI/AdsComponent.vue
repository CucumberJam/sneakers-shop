<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

defineProps({
  imgSrc: String,
  imgAlt: String,
  title: String,
  notification: String,
})

</script>

<template>
  <div class="mb-72 flex flex-col items-center justify-center">
    <img :src="imgSrc" :alt="imgAlt"/>
    <h3 class="text-2xl font-bold pr-10 ">{{ title }}</h3>
    <p class="text-slate-400 text-center my-5">{{ notification }}</p>
    <ButtonComponent class="w-80 mb-7" name="Go back"
                     @click.passive="$emit('close')">
      <template #first>
        <img src="/arrow-next.svg"  alt="order-click"
             class="ml-8 origin-left rotate-180"/>
      </template>
    </ButtonComponent>
  </div>
</template>

<style scoped>

</style>