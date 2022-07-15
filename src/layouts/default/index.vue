<template>
  <Layout>
    <PageLayout />
  </Layout>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Layout } from 'ant-design-vue';

  import PageLayout from '/@/layouts/page/index.vue';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      PageLayout,
      Layout,
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
