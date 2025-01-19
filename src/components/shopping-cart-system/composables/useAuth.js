// src/composables/useAuth.js
import { ref } from 'vue';

export function useAuth() {
  const authState = ref({
    isLoggedIn: false,
    user: null,
  });

  const login = () => {
    authState.value.isLoggedIn = true;
    authState.value.user = { name: 'John Doe' }; // Example user info
    localStorage.setItem('auth', JSON.stringify(authState.value)); // Save to localStorage
  };

  const logout = () => {
    authState.value.isLoggedIn = false;
    authState.value.user = null;
    localStorage.removeItem('auth'); // Remove from localStorage
  };

  // Optionally, initialize authState from localStorage (to persist session)
  const loadAuthStateFromLocalStorage = () => {
    const savedAuthState = JSON.parse(localStorage.getItem('auth'));
    if (savedAuthState) {
      authState.value = savedAuthState;
    }
  };

  // Run loadAuthStateFromLocalStorage when the app initializes
  loadAuthStateFromLocalStorage();

  return {
    authState,
    login,
    logout
  };
}
