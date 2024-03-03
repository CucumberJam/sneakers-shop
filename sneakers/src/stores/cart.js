import {computed, ref} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const itemsInCart = ref([]);
  const showModalCartView = ref(false);
  const addItemToCart = (item) => {
    let found = itemsInCart.value.find(el => el.id === item.id);
    if(found && (item.size === found.size)){
      found.count++;
    }else{
      let obj = Object.assign({count: 1}, item);
      itemsInCart.value.push(obj);
    }
  }
  const getItems = () => {
    return itemsInCart;
  }
  const removeItem = (item) => {
    let found = itemsInCart.value.find(el => (el.id === item.id) && (el.size === item.size));
    if(found && found.count > 1){
      found.count--;
    }else{
      itemsInCart.value = [...itemsInCart.value.filter(elem => (elem.id !== item.id) || (elem.size !== item.size))];
    }
  }
  const order = () => {

  }
  const getSum = computed(()=> {
    return itemsInCart.value.reduce((sum, item) => {
      return sum + item.count * item.price
    }, 0);
  })
  const getSale = computed (()=> {
    return 0;
  })
  const getTotal = computed(()=> {
    return getSum.value - getSale.value;
  })

  return { itemsInCart, addItemToCart, getItems, removeItem, order,
    getSum, getSale, getTotal,showModalCartView }
})
