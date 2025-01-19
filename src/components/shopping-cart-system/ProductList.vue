<template>
    <div>
      <h2>Product List</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <p>{{ product.name }} - ${{ product.price }}</p>
        <button @click="addProductToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    props: {
      products: Array
    },
    methods: {
      addProductToCart(product) {
        this.$store.commit('addToCart', product); // Add product to Vuex cart state
      }
    }
  };
  </script>
  