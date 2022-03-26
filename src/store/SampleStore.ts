import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useSampleStore = defineStore('sampleStore', {
  state: () => ({
    appName: "Vue App",
    count: 0
  }),

  getters: {
    getAppName: (state) => state.appName
  }
})