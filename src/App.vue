<template>
  <ShoppingCartSystem/>
</template>

<script>
import ShoppingCartSystem from "./components/shopping-cart-system/ShoppingCartSystem.vue";
export default {
  name: 'App',
  components: {
    ShoppingCartSystem
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
