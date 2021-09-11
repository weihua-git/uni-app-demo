<template>
	<view class="content flex col">
		<h1>请登录</h1>
		<input v-model="loginFrom.mobile" class="account" type="text" placeholder="请输入账号" value="" />
		<input v-model="loginFrom.password" class="pwd" type="text" placeholder="请输入密码" value="" />
		<view class="login-btn flex ct al" @click="doLogin">
			<text>登录</text>
		</view>
		<view class="tip-box flex sb">
			<text>忘记密码？</text>
			<text>注册账号</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginFrom: {
					mobile: '17670848610',
					password: 'admin'
				}
			}
		},
		methods: {
			async doLogin() {
				console.log("asdsad");
				if (!this.loginFrom.mobile) {
					uni.showToast({
						title: '请输入账号',
						icon: 'none'
					})
					return
				}
				if (!this.loginFrom.password) {
					uni.showToast({
						title: '请输入密码',
						icon: 'none'
					})
					return

				}
				let res = await this.$request(`/v1/login`, this.loginFrom, 'POST');
				console.log("ASdsa");
				if (res.code == 200) {
					uni.showToast({
						title: '登录成功'
					})
					uni.setStorageSync( 'token',res.content.token)
					uni.switchTab({
						url:'../home/home'
					}) 
				} else { 
					uni.showToast({
						title: res.msg,
						icon: 'none'
					})
				} 
			}
		}
	}
</script>

<style lang="less">
	.content {
		padding: 46px 36px 0;

		h1 {
			font-size: 26px;
			font-weight: bold;
			color: #222222;
			line-height: 37px;
		}

		.account,
		.pwd {
			width: 303px;
			height: 54px;
			border-radius: 27px;
			padding-left: 59px;
			box-sizing: border-box;
		}

		.account {
			margin-top: 46px;
			background: #F5F5F5 url(../../static/logo.png) no-repeat 25px center;
			background-size: 24px 24px;
		}

		.pwd {
			background: #F5F5F5 url(../../static/logo.png) no-repeat 25px center;
			background-size: 24px 24px;
			margin-top: 15px;
		}

		.login-btn {
			margin-top: 30px;
			width: 100%;
			height: 54px;
			background: #FF3D3D;
			border-radius: 27px;

			text {
				width: 46px;
				height: 25px;
				font-size: 18px;
				font-weight: bold;
				color: #FFFFFF;
				line-height: 25px;
				letter-spacing: 5px;
			}
		}

		.tip-box {
			margin-top: 15px;
			height: 50px;

			text {
				width: 75px;
				height: 21px;
				font-size: 15px;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: #9EA2B4;
				line-height: 21px;
			}
		}

	}
</style>
