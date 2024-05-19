<template>
	<div class="login_main_left_main">
		<div class="login_main_left_main_header">
			<p>扫码登陆</p>
			<span>在「我的页」右上角打开扫一扫</span>
		</div>

		<div class="qrcode">存放二维码</div>
		<p>其他方式:微信 QQ</p>
	</div>
</template>
<style scoped lang="less">
.login_main_left_main {
	width: 80%;
	height: 250px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;

	span {
		font-size: 12px;
	}
	.qrcode {
		width: 150px;
		height: 150px;
		background-color: #000;
	}
}
</style>
