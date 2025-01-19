<template>
      <h1>Vuex Shopping Cart</h1>
  
      <div v-if="!authState.isLoggedIn">
        <button @click="handleLogin">Login</button>
      </div>
      <div v-else>
        <h3>Welcome, {{ userName }}!</h3>
        <button @click="handleLogout">Logout</button>
      </div>
  
      <div v-if="authState.isLoggedIn">
        <ProductList :products="products" />
        <ShoppingCart :cart="cartItems" />
      </div>
  </template>
  
  <script>
  // Import necessary components
  import ProductList from './ProductList.vue';
  import ShoppingCart from './ShoppingCart.vue';
  import { useAuth } from './composables/useAuth';
  import { useCart } from './composables/useCart'
  
  export default {
    name: 'ShoppingCartSystem',
    components: {
      ProductList,
      ShoppingCart
    },
    setup() {
      const { state: authState, login, logout } = useAuth();
      const { cartItems, addToCart, removeFromCart, clearCart } = useCart();
  
      const userName = "John Doe"; // Assume user name or fetch from API
  
      const handleLogin = () => {
        login();
      };
  
      const handleLogout = () => {
        logout();
        clearCart(); // Clear cart when logging out
      };
  
      const products = [
        { id: 1, name: 'Product 1', price: 20 },
        { id: 2, name: 'Product 2', price: 30 },
        { id: 3, name: 'Product 3', price: 40 },
      ];
  
      return {
        authState,
        userName,
        products,
        cartItems,
        addToCart,
        removeFromCart,
        handleLogin,
        handleLogout
      };
    }
  };
  </script>
  
  <style>
  
  h1 {
    font-size: 2em;
  }
  
  button {
    padding: 10px 15px;
    font-size: 1.1em;
    margin-top: 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f2f2f2;
  }
  
  div {
    margin: 20px 0;
  }
  </style>
  