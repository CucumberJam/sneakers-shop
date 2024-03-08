<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import DrawerComponent from "@/components/UI/DrawerComponent.vue";
import 'primeicons/primeicons.css'
import CartModalComponent from "@/components/cart/CartModalComponent.vue";
import {onMounted, ref} from "vue";
import {RouterView} from "vue-router";
import {useSneakersStore} from "@/stores/sneakers.js";
import {useAuthStore} from "@/stores/auth.js";

const showCartModal = ref(false);
const sneakersStore= useSneakersStore();
const authStore = useAuthStore();

onMounted(() => {
  sneakersStore.init();
  authStore.init();
});
const toggleShowCartModal = () => {
  showCartModal.value = !showCartModal.value;
}
</script>

<template>
  <DrawerComponent v-if="showCartModal">
    <CartModalComponent @closeCartModal="toggleShowCartModal"/>
  </DrawerComponent>

  <div class='bg-white w-4/5 m-auto rounded-xl shadow-xl mt-10'>
    <HeaderComponent @showModalCartView="toggleShowCartModal"/>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
