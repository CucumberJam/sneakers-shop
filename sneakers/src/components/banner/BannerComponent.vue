<script setup>
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
    default: 1
  },
  buttonName: {
    type: String,
    required: true,
    default: "Add"
  }
});
defineEmits(['click']);

const strImg = `/sales/logo-${props.id}.png`;
const altImg = `img logo-${props.id}`;


</script>

<template>
  <div class="px-10">
    <div class="bg-[#F4EFE9] flex justify-between">
      <div class="banner-desc mt-3 pl-10 h-300 max-h-full pb-8">
        <div class="flex flex-col justify-between items-center h-full">
          <div class="self-start">
            <img :src="strImg" :alt="altImg"/>
          </div>
          <div class="text-center">
            <h2 class="text-4xl font-bold">
              <span class="text-[#8BB43C]">Stan Smith</span>,<br/>
              Forever!</h2>
          </div>
          <ButtonComponent :name="buttonName" @click="$emit('click')"/>
        </div>
      </div>
      <div class="banner-img overflow-x-auto max-h-300px">
        <img class="h-full" src="/sales/banner-1.png" alt="img banner-1"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner{
}
</style>