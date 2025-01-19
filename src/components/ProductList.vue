<template>
    <div>
      <h2>Product List</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <p>{{ product.title }}</p>
        <p>${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';
  
  export default {
    name: 'ProductList',
    setup() {
      const store = useStore();
      const products = store.state.products;
  
      // Fetch products when component is mounted
      onMounted(() => {
        store.dispatch('fetchProducts');
      });
  
      const addToCart = (product) => {
        store.commit('addToCart', product);
      };
  
      return { products, addToCart };
    },
  };
  </script>
  