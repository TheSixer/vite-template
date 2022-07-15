<template>
  <div class="p-4">
    <template v-for="src in imgList" :key="src">
      <img :src="src" v-show="false" />
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const imgList = ref<string[]>([]);
</script>
<script>
  export default {
    name: 'ErrorLog',
  };
</script>
