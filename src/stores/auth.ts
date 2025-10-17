import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  
  actions: {
    setIsAuthenticated(value: boolean) {
      this.isAuthenticated = value
    },
    
    logout() {
      this.isAuthenticated = false
    }
  }
})