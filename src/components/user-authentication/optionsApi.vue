<template>
    <div>
      <h1>User Authentication</h1>
      <button v-if="!isLoggedIn" @click="login">Login</button>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
  
      <h2 v-if="isLoggedIn">Profile</h2>
      <p v-if="isLoggedIn">{{ userProfile.name }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoggedIn: false,
        userProfile: null,
      };
    },
    methods: {
      login() {
        this.isLoggedIn = true;
        this.fetchProfile();
      },
      logout() {
        this.isLoggedIn = false;
        this.userProfile = null;
      },
      async fetchProfile() {
        // Simulate API call
        this.userProfile = { name: "John Doe" };
      },
    },
  };
  </script>
  