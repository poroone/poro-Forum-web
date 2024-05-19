<template>
  <div class="animate-content">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style scoped lang="less">
#app {}

.animate-content {

}
</style>