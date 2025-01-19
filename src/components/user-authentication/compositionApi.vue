<template>
    <div>
      <h1>User Authentication</h1>
      <button v-if="!isLoggedIn" @click="handleLogin">Login</button>
      <button v-if="isLoggedIn" @click="handleLogout">Logout</button>
  
      <h2 v-if="isLoggedIn">Profile</h2>
      <p v-if="isLoggedIn">{{ userProfile.name }}</p>
    </div>
  </template>
  
  <script>
  import { useAuth } from '../../composables/useAuth';
  import { useProfile } from '../../composables/useProfile';
  
  export default {
    setup() {
      const { isLoggedIn, login, logout } = useAuth();
      const { userProfile, fetchProfile, clearProfile } = useProfile();
  
      const handleLogin = () => {
        login();
        fetchProfile();
      };

      const handleLogout = () => {
        logout();
        clearProfile();
      };
  
      return {
        isLoggedIn,
        login,
        logout,
        userProfile,
        handleLogin,
        handleLogout
      };
    },
  };
  </script>
  