<script setup>
import {useCartStore} from "@/stores/cart.js";
import {useSneakersStore} from "@/stores/sneakers.js";
import AdsComponent from "@/components/UI/AdsComponent.vue";
import router from "@/router/index.js";
import CardListComponent from "@/components/card/CardListComponent.vue";

const cartStore = useCartStore();
const sneakersStore = useSneakersStore();
const backToMainPage = () => {
  router.push({ path: '/', replace: true })
}
</script>

<template>
  <div class="mt-8 flex flex-col gap-5 h-screen">
      <div v-if="sneakersStore.favorites.length" class="ml-10">
        <h2 class="text-3xl font-bold pb-10">My favorite: </h2>
        <CardListComponent :is-searching="sneakersStore.config.isSearching"
                           :cards="sneakersStore.favorites"
                           :toggle-favorite="sneakersStore.toggleFavorite"
                           :add="cartStore.addItemToCart"/>
      </div>
      <div v-else class="self-center mt-20">
        <AdsComponent class="justify-center items-center" title="Закладок нет :("
                      img-src="/emoji-1.png"
                      alt="sadness"
                      notification="Вы ничего не добавляли в закладки"
                      @close="backToMainPage"/>
      </div>
  </div>

</template>

<style scoped>

</style>