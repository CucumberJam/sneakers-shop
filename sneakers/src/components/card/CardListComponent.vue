<script setup>
import CardComponent from "@/components/card/CardComponent.vue";

defineProps({
  isSearching: Boolean,
  cards: Array,
  toggleFavorite: Function
})

const emit = defineEmits(['add'])
const add = (newItem) => {
 emit('add', newItem);
}

</script>

<template>
    <div v-if="!isSearching" class="grid grid-cols-4 gap-4 ">
      <CardComponent v-for="item in cards"
                     :key="item.id"
                     :image-url="item.imageUrl"
                     :fullname="item.fullname"
                     :id="item.id"
                     :price="item.price"
                     :sizes ="item.sizes"
                     :is-added="item.isAdded"
                     :is-favorite="item.isFavorite"
                     :onClickFavorite="toggleFavorite"
                     :onClickAdd="add"/>
    </div>
    <div v-else class="grid grid-cols-4 gap-4 ">
      <div v-for="item in [12]" :key="item">
        <img src="/rectangle.png" alt="rectangle"/>
      </div>
    </div>
</template>

<style scoped>

</style>