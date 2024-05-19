<template>
	<div class="search">
		<div class="search_main">
			<el-input v-model="value" placeholder="请尽情的搜索我" @input="onValue" />
			<el-button @click="onValue">
				<el-icon>
					<i-ep-Search></i-ep-Search>
				</el-icon>
			</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
const onValue = () => {
	console.log(value.value);
};
// defineEmits()
</script>
<style scoped lang="less">
.search {
	width: 50%;

	&_main {
		margin:0 auto;
		width: 80%;
		&:deep(.el-input) {
			margin: 0 auto;
			width: 90%;
			background: #ccc;

		}
		&:deep(.el-input__wrapper) {
			background: #F5F6FA;

		}
	}


}
</style>
