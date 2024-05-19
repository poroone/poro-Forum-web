<template>
	<div class="tabTop">
		<p class="tabTop_title">账号登录</p>
		<el-form
			ref="ruleFormRef"
			label-width="auto"
			:model="formLabel"
			:rules="rules"
			style="max-width: 600px"
		>
			<el-form-item prop="username">
				<el-input v-model="formLabel.username" autofocus placeholder="账号" />
			</el-form-item>
			<el-form-item prop="password">
				<el-input
					v-model="formLabel.password"
					clearable
					show-password
					placeholder="密码"
				/>
			</el-form-item>

			<el-button
				color="#1772F6"
				size="default"
				style="width: 100%; margin-top: 20px"
				@click="onSubmit(ruleFormRef)"
				>登录</el-button
			>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useUserStore } from "@/stores/user/login";
import type { FormInstance, FormRules } from "element-plus";

const userStore = useUserStore();
const ruleFormRef = ref<FormInstance>();

// 验证
const validatePass = (rule: any, value: any, callback: any) => {
	if (!value) {
		callback(new Error("不能为空"));
	} else {
		//
		const Regula = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^\da-zA-Z\s]).{6,12}$/;
		if (!Regula.test(value)) {
			callback(new Error("密码必须包含数字或字母共6-9位"));
		} else {
			callback();
		}
	}
};
const validatePass2 = (rule: any, value: any, callback: any) => {
	if (!value) {
		callback(new Error("不能为空"));
	} else {
		const Regula = /^[a-zA-Z]{5,10}$/;
		if (!Regula.test(value)) {
			callback(new Error("账号必须包含字母共5-9位"));
		} else {
			callback();
		}
	}
};
// 数据
const formLabel = reactive({
	username: "",
	password: "",
});

// 验证
const rules = reactive<FormRules<typeof formLabel>>({
	password: [{ validator: validatePass, trigger: "blur" }],
	username: [{ validator: validatePass2, trigger: "blur" }],
});

// 提交
const onSubmit = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	// console.log()
	formEl.validate(async (valid) => {
		if (valid) {
			console.log("submit!", formLabel);

			await userStore.userLogin(formLabel);
			console.log(userStore.token, userStore.userInfo, "----");
		} else {
			console.log("error submit!");
			return false;
		}
	});
};
</script>

<style lang="less" scoped>
.tabTop {
	position: relative;
	padding: 40px 30px;

	&:deep(.el-input__wrapper) {
		box-shadow: 0 0 0 0 px var(--el-input-border-color, var(--el-border-color))
			inset;
		border-bottom: 1px solid #ccc;
	}
	&_title {
		margin: 20px 0 40px;

		font-weight: 600;
	}
}
</style>
