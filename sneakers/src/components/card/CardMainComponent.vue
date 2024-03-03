<script setup>
import {useCartStore} from "@/stores/cart.js";
import CardHeadComponent from "@/components/card/CardHeadComponent.vue";
import {useSneakersStore} from "@/stores/sneakers.js";
import CardListComponent from "@/components/card/CardListComponent.vue";

const cartStore = useCartStore();
const sneakersStore= useSneakersStore();


</script>

<template>
  <div class="p-10">
    <CardHeadComponent @sort="sneakersStore.sort"
                       @reset="sneakersStore.resetFilters"
                       @filter="sneakersStore.filter"
                       :isSearching="sneakersStore.config.isSearching"/>

    <CardListComponent :is-searching="sneakersStore.config.isSearching"
                       :cards="sneakersStore.filteredPaginated"
                       :toggle-favorite="sneakersStore.toggleFavorite"
                       @add="cartStore.addItemToCart"/>

  </div>
</template>

<style scoped>

</style>