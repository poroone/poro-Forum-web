<template>
    <div class="Personal">
   
        <!-- 头像 -->
        <AvatarEl />
        <!-- 消息 -->
        <Message></Message>
        <!-- 个人 -->
        <Mine></Mine>
        <!-- 自定义主题 -->
        <ThemeColor></ThemeColor>
    </div>
</template>

<script setup lang="ts">
import ThemeColor from '@/components/ThemeColor.vue';
import AvatarEl from '@/components/AvatarEl.vue';
import Message from "./Message.vue"
import Mine from './Mine.vue'
</script>

<style scoped lang="less">
.Personal {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
</style>