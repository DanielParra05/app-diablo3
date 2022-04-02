<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useOauthStore } from "@/store/oauth";

const oauthStore = useOauthStore();
onBeforeMount(() => {
  oauthStore.setAccessToken();
});
</script>

<template>
  <router-view />
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
