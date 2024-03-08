<script setup>
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import LoaderComponent from "@/components/UI/LoaderComponent.vue";
import {useAuthStore} from "@/stores/auth.js";
import {ref} from "vue";
import MessagesComponent from "@/components/UI/MessagesComponent.vue";

const authStore = useAuthStore();
const email = ref();

</script>

<template>
  <main class="form-block">
    <MessagesComponent :error-message="authStore.config.error"
                       :success="authStore.config.success"/>
    <form class="form">
      <h2 class="form_header">Reset password:</h2>
      <div class="form__item">
        <span>
          <i class="pi pi-user"></i>
        </span>
        <InputText class="input" type="email" v-model="email" placeholder="Your E-mail"/>
      </div>
      <LoaderComponent v-if="authStore.config.loader"/>
      <div v-else class="form__item">
        <Button class="btn" label="Set" @click="authStore.forgotPassword(email)"/>
      </div>
      <div></div>
    </form>
    </main>
</template>

<style scoped>

.btn{
  max-width: 200px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #3faa7f;
  padding: 5px;
  color: #3faa7f;
  transition: all linear 500ms;
}
.btn:hover{
  border: 1px solid #ecec2a;
  color: #ecec2a;
}
.form_header{
  font-size: 28px;
  font-weight: 700;
}
.input{
  background-color: white;
  border-radius: 5px;
  padding-left: 5px;
}
.input:focus{
  outline: none;
  color: #808277;
}

h2{
  padding-left: 10px;
  margin: 20px auto;
  color: white;
  text-align: center;
}
.form-block{
  opacity: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
.form{
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: rgb(34,193,195);
  background: linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
}
.btn{
  width: 35%;
}
.form__item{
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.form__item:last-child{
  margin: 20px 0 0 0;
}
.form__item span {
  color: white;
  margin-right: 10px;
  font-size: 14px;
}
.form__item a{
  text-decoration: none;
  color: white;
  transition: all linear 300ms;
}
.form__item a:hover{
  color: darkgray;
}
</style>