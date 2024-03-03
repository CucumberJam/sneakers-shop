<script setup>
import Carousel from 'primevue/carousel';

defineProps({
  sales: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <Carousel :value="sales" :numVisible="1" :numScroll="3"> <!--:responsiveOptions="responsiveOptions"-->
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2  p-3">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full border-round" />
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
          </div>
        </div>
        <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
        <div class="flex justify-content-between align-items-center">
          <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
          <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style scoped>

</style>