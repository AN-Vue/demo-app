// src/composables/useCart.js
import { ref } from 'vue';

export function useCart() {
  const cartItems = ref([]);

  const addToCart = (product) => {
    cartItems.value.push(product);
  };

  const removeFromCart = (product) => {
    cartItems.value = cartItems.value.filter(item => item.id !== product.id);
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart
  };
}
