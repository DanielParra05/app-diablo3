<script setup lang="ts">
import { onBeforeMount } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useOauthStore } from "@/store/oauth.ts";

const oauthStore = useOauthStore();
onBeforeMount(() => {
  oauthStore.setAccessToken();
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Hello Vue 3 + TypeScript + Vite + Vitest + Quasar + Pinia 🍍"
  />
  <pulse-loader></pulse-loader>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
