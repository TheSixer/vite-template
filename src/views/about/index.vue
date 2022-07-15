<template>
  <div>
    <h4>This is about page.</h4>
    <p>The port of this web is {{ vitePort }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'AboutPage',
    setup() {
      const vitePort = ref(import.meta.env.VITE_PORT);
      return {
        vitePort,
      };
    },
  });
</script>
