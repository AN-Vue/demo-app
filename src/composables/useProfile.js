import { ref } from 'vue';

export function useProfile() {
  const userProfile = ref(null);

  const fetchProfile = async () => {
    // Simulate API call
    userProfile.value = { name: "John Doe" };
  };

  const clearProfile = () => {
    userProfile.value = null;
  };

  return {
    userProfile,
    fetchProfile,
    clearProfile,
  };
}
