import { ref } from 'vue';

export function useAuth() {
  const isLoggedIn = ref(false);

  const login = () => {
    isLoggedIn.value = true;
  };

  const logout = () => {
    isLoggedIn.value = false;
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
}
