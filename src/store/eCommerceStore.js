// src/store/eCommerceStore.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [], // List of all products
    cart: [], // List of items in the cart
    user: null, // Logged-in user information
  },

  getters: {
    // Get total items in the cart
    cartItemCount: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),

    // Calculate total price of the cart
    cartTotalPrice: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },

  mutations: {
    // Set products in state
    setProducts(state, products) {
      state.products = products;
    },

    // Add a product to the cart
    addToCart(state, product) {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    // Remove a product from the cart
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },

    // Update user information
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    // Fetch products from an API
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        commit('setProducts', products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },

    // Simulate user login
    loginUser({ commit }, user) {
      commit('setUser', user);
    },
  },
});

export default store;
