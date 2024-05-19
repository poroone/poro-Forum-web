<template>
	<div class="login">
		<div class="login_main">
			<div class="login_main_left">
				<tableLeftView></tableLeftView>
			</div>
			<div class="login_main_right">
				<tableTopView></tableTopView>
				<tableBottomView></tableBottomView>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import tableTopView from "./tableView/tableTopView.vue";
import tableBottomView from "./tableView/tableBottomView.vue";
import tableLeftView from "./tableView/tableLeftView.vue";
</script>
<style scoped lang="less">
.login {
	width: 100vw;
	height: 100vh;
	background-color: @background;
	background-image: url("@/image/sign_bg.47eec442.png");
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	&_main {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 733px;
		height: 507px;
		background: #fff;
		display: flex;
		justify-content: space-around;
		&_left {
			flex: 1;
			border-right: 1px solid #ccc;
			position: relative;
		}
		&_right {
			flex: 1.2;
		}
	}
}
</style>
