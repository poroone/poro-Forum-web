<template>
    <div class="demo-color-block">
      
        <el-color-picker v-model="color" show-alpha :predefine="predefineColors" @change="changeColor" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { setTheme } from "@/styles/Theme/theme.ts"
import localCache from "@/utils/localCache.ts"

const color = ref('#f5f7fd')
 
const predefineColors = ref([
    "#f5f7fd",
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])
console.log(color)
const changeColor = () => {
    console.log(color)
    setTheme(color.value)
    localCache.setCache("them", color)
}

</script>
<style scoped lang="less">

.demo-color-block .demonstration {
    margin-right: 16px;
}
</style>