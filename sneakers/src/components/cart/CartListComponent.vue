<script setup>
import CartItemComponent from "@/components/cart/CartItemComponent.vue";

const props = defineProps({
  cartItems: Array,
  remove: Function
})
const onClickDelete = (item) =>{
  props.remove(item);
}
</script>

<template>
  <div class="flex flex-col mt-7 gap-5">
    <CartItemComponent v-for="elem in cartItems"
                       :key="elem.id"
                       :id="elem.id"
                       :imageUrl="elem.imageUrl"
                       :fullname="elem.fullname"
                       :price="elem.price"
                       :size="elem.size"
                       :count="elem.count"
                       @remove="onClickDelete"/>
  </div>
</template>

<style scoped>

</style>