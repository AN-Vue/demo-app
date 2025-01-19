<template>
    <div>
      <h2>Your Cart</h2>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cart" :key="item.id">
            <p>{{ item.name }} - ${{ item.price }}</p>
            <button @click="removeProductFromCart(item)">Remove</button>
          </li>
        </ul>
        <button @click="clearCart">Clear Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    props: {
      cart: Array
    },
    methods: {
      removeProductFromCart(item) {
        this.$store.commit('removeFromCart', item); // Remove product from Vuex cart state
      },
      clearCart() {
        this.$store.commit('clearCart'); // Clear all items from Vuex cart state
      }
    }
  };
  </script>
  