<script setup>
import {ref} from "vue";
import ModalViewComponent from "@/components/UI/ModalViewComponent.vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sizes: {
    type: Array,
    required: false,
    default: () => []
  },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  },
  isAdded: {
    type: Boolean,
    required: false,
    default: false,
  },
  onClickAdd: Function,
  onClickFavorite: Function
});
const showSizes = ref(false);
const showModal = ref(false);
const mouseHover = () => {
  showSizes.value = true;
}
const mouseOut = () => {
  showSizes.value = false;
}
const choseSize = () => {
  showModal.value = true;
}
const closeModal = () => {
   showModal.value = false;
}
const setSize = (size) => {
  showModal.value = false;
  let obj = {...props,  size}
  props.onClickAdd(obj);

}
</script>

<template>
    <div class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer
          hover:-translate-y-2 hover:shadow-xl transition
          flex flex-col"
         @mouseover="mouseHover" @mouseout="mouseOut">

      <img :src="isFavorite ? '/like-2.svg' : '/like-1.svg' " alt="like"
           class="absolute top-8 left-8" @click="onClickFavorite(id)" />


      <img :src="imageUrl" alt="sneakers"/>
      <p class="name  mt-2">{{ fullname }}</p>

      <div class="price-box flex justify-between mt-5">
        <div class="flex flex-col ">
          <span class="text-slate-400">Цена:</span>
          <b>{{ price }} ₽.</b>
        </div>

        <img :src="!isAdded ? '/plus.svg' : '/checked.svg' " alt="add button"
             @click="choseSize"/>
      </div>

      <div v-show="showSizes" class="flex justify-around my-3">
        <p v-for="elem in sizes" :key="elem" class="text-slate-400 hover:text-black transition">
          {{elem}}
        </p>
      </div>
    </div>

  <ModalViewComponent title="Choose size:"
                      :is-visible="showModal"
                      @exit="closeModal">

    <div class="flex justify-around my-3 gap-5">
      <div v-for="elem in sizes" :key="elem" class="text-slate-400 hover:text-black transition cursor-pointer"
      @click="setSize(elem)">
        {{elem}}
      </div>
    </div>
  </ModalViewComponent>

</template>

<style scoped>
</style>