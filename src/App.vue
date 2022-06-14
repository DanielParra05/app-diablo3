<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useOauthStore } from "@/store/oauth";
import MainLayout from "./layouts/MainLayout.vue";
import LoadingLayout from "./layouts/LoadingLayout.vue";
import Loading from "./components/Loading.vue";
import { useLoadingStore } from "./store/loading";

const oauthStore = useOauthStore();
const loadingStore = useLoadingStore();

onBeforeMount(() => {
  oauthStore.setAccessToken();
});
</script>

<template>
  <loading-layout v-if="loadingStore.isLoading">
    <loading></loading>
  </loading-layout>
  <main-layout v-else></main-layout>
</template>

<style lang="stylus">
#app
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #ffffff // Le ponemos un color de letra blanco para que resalte
  background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>
