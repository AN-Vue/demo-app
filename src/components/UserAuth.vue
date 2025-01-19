<template>
    <div>
      <h2>User Login</h2>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input v-model="email" type="email" />
        <label>Password:</label>
        <input v-model="password" type="password" />
        <button type="submit">Login</button>
      </form>
      <p v-if="user">Welcome, {{ user.name }}!</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'UserAuth',
    setup() {
      const store = useStore();
      const email = ref('');
      const password = ref('');
      const user = store.state.user;
  
      const login = () => {
        const mockUser = { name: 'John Doe', email: email.value };
        store.dispatch('loginUser', mockUser);
      };
  
      return { email, password, login, user };
    },
  };
  </script>
  