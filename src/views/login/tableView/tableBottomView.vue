<template>
	<div class="tabBottom">
		<P>其他登录</P>
		<el-button circle plain type="info">
			<svg-icon
				name="qq"
				color="#000000"
				style="width: 30px; height: 30px"
			></svg-icon>
		</el-button>
		<el-button circle plain type="info">
			<svg-icon
				name="wx"
				color="#000000"
				style="width: 30px; height: 30px"
			></svg-icon>
		</el-button>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style scoped lang="less">
.tabBottom {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	flex: 1;
	p {
		width: 100%;
		text-align: center;
		position: relative;
		margin: 20px 0;
	}
	&:deep(.el-button) {
		width: 50px;
		height: 50px;
	}
}
</style>
