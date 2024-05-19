<template>
  <div class="main">
    <headerView></headerView>
    <main-view></main-view>
  </div>
</template>

<script setup lang="ts">
import headerView from "./headerView/headerView.vue";
import mainView from "./mainView/mainView.vue";
</script>

<style scoped lang="less">
.main {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  height: 100vh;
}
</style>
