<script setup>
import 'primeicons/primeicons.css';

defineProps({
  title: String,
  isVisible: Boolean
})

</script>

<template>
  <div class="modal-back" v-if="isVisible"></div>
  <div class="modal-box shadow-xl" v-if="isVisible">
    <i class="pi pi-times cross" style="font-size: 1.5rem"
       @click="$emit('exit')"></i>
    <h3>{{ title }}</h3>
    <slot/>
  </div>
</template>

<style scoped>
.modal-back{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  opacity: 30%;
  top: 0;
  left: 0;
  z-index: 4;
}
.modal-box{
  position: absolute;
  margin: 20% 30%;
  top: 10%;
  z-index: 5;

  background: white;

  max-width: 300px;
  width: 100%;
  min-height: 100px;

  border-radius: 10px;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.cross{
  position: relative;
  left: 45%;
  top: -15px;
  opacity: 25%;
  width: 5px;
}
@media screen and (max-width: 668px){
  .modal-box{
    max-width: 300px;
    min-height: 400px;
    padding: 20px;
    margin: 0 15%;
  }
  .modal-box h3{
    margin: 5px 0;
  }
  .modal-box form{
    font-size: 12px;
  }
}
@media screen and (max-width: 453px){
  .modal-box{
    margin: 0 5%;
  }
}
@media screen and (max-width: 380px){
  .modal-box{
    margin: 0 2%;
  }
}
</style>