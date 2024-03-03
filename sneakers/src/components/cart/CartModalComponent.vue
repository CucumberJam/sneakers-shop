<script setup>
import CartModalHeadComponent from "@/components/cart/CartModalHeadComponent.vue";
import CartListComponent from "@/components/cart/CartListComponent.vue";
import {useCartStore} from "@/stores/cart.js";
import CartTotalSumComponent from "@/components/cart/CartTotalSumComponent.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import AdsComponent from "@/components/UI/AdsComponent.vue";

const cartStore = useCartStore();
const order = () => {
  
  cartStore.order();
}
</script>

<template>
  <div class="flex flex-col gap-5 h-full justify-between">
    <CartModalHeadComponent @close="$emit('closeCartModal')"/>
    <template v-if="cartStore.itemsInCart.length">
      <CartListComponent class="flex-1" :cart-items="cartStore.itemsInCart"
                         :remove="cartStore.removeItem"/>
      <CartTotalSumComponent :sum="cartStore.getSum"
                             :sale="cartStore.getSale"
                             :total="cartStore.getTotal"/>
      <ButtonComponent class="w-80 mb-7" name="Order"
                       @click="order">
        <template #second>
          <img src="/arrow-next.svg" alt="order-click"
             class="ml-8"/>
        </template>
      </ButtonComponent>
    </template>

    <template v-else>
      <AdsComponent title="Корзина пустая"
                    img-src="/package-icon.png"
                    img-alt="package"
                    notification="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                    @close="$emit('closeCartModal')"/>
    </template>

  </div>
</template>

<style scoped>

</style>