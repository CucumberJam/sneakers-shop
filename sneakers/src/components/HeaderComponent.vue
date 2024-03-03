<script setup>
import {useCartStore} from "@/stores/cart.js";
import {RouterLink} from "vue-router";

const cartStore = useCartStore();

</script>

<template>
  <header class="flex justify-between border-b border-[#EAEAEA] px-10 py-8 ">
    <div class="flex items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-10"/>
      <div>
        <h2 class="text-xl font-bold uppercase">Sneakers</h2>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>

    <nav class="flex items-center justify-between gap-10">
      <a class="flex items-center cursor-pointer gap-3 text-slate-400 hover:text-black transition"
          @click="$emit('showModalCartView')">
        <img src="/cart.svg" alt="cart"/>
        <b>{{ cartStore.getTotal }} руб.</b>
      </a>
      <RouterLink to="/favorites" class="flex items-center cursor-pointer gap-3 text-slate-400 hover:text-black transition">
        <img src="/heart.svg" alt="cart"/>
        <span>Закладки</span>
      </RouterLink>
      <RouterLink to="/orders" class="flex items-center cursor-pointer gap-3 text-slate-400 hover:text-black transition">
        <img src="/profile.svg" alt="profile"/>
        <span>Профиль</span>
      </RouterLink>
    </nav>
  </header>

</template>

<style scoped>

</style>