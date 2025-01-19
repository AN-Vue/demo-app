<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          <p>{{ item.title }} (x{{ item.quantity }})</p>
          <p>${{ item.price * item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p>Total Items: {{ cartItemCount }}</p>
      <p>Total Price: ${{ cartTotalPrice }}</p>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  
  export default {
    name: 'ShopCart',
    setup() {
      const store = useStore();
      const cart = store.state.cart;
      const cartItemCount = store.getters.cartItemCount;
      const cartTotalPrice = store.getters.cartTotalPrice;
  
      const removeFromCart = (id) => {
        store.commit('removeFromCart', id);
      };
  
      return { cart, cartItemCount, cartTotalPrice, removeFromCart };
    },
  };
  </script>
  