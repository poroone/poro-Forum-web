<template>
    <div class="main_header">
        <div>logo</div>
        <!-- 搜索 -->
        <search></search>
    
        <!-- 个人 -->
        <Personal></Personal>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import search from "@/components/SearchEl.vue";
import Personal from "./component/Personal.vue";

</script>
<style scoped lang="less">
.main_header {
    width: 100%;
    height: 50px;
    background: @background;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;


}
</style>
