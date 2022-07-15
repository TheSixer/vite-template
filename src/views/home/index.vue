<template>
  <div>
    <h4>This is home page.</h4>
    <p>The port of this web is {{ vitePort }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'HomePage',
    setup() {
      const vitePort = ref(import.meta.env.VITE_PORT);
      return {
        vitePort,
      };
    },
  });
</script>

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
