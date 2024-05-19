<template>
  <div class="demo-type">
    <el-dropdown :hide-on-click="false" @command="handleCommand">

      <el-avatar src="https://empty" fit="fill" @error="errorHandler">
        <img :src=avatar />
      </el-avatar>


      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">安全设置</el-dropdown-item>
          <el-dropdown-item command="c">自定义主题</el-dropdown-item>
          <el-dropdown-item command="d" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const avatar = ref("http://39.98.47.211:8888/api/upload/1/avatar")
const errorHandler = () => true

const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
  console.log(command)
}
</script>
<style scoped lang=less>
:deep(:focus-visible) {

  outline: none;

}
</style>