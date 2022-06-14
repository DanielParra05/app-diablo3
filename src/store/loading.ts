import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useLoadingStore = defineStore('loadingStore', {
  state: () => ({
    loading: false,
  }),

  actions: {
    toggleLoading() {
      this.loading = !this.loading;
    }
  },
  getters: {
    isLoading: (state) => state.loading
  }
})