<template>
	<view class="content">
		<view class="status_bar">
		</view>
		<!-- 头部搜索 --> 
		<view class="header flex sa al">
			<input class="search-input" placeholder="热门搜索文案" type="text" value="" />
			<image src="../../static/logo.png" mode=""></image>
			<image class="lastImag" src="../../static/logo.png"></image>
		</view>
		<!-- tab标签分类栏 -->
		<view class="tabbox flex sa">
			<text :class="categoryTabsAction==categoryTabItem.id?'active':''"
				v-for="(categoryTabItem,i)  in categoryTabs" :key="i+''"
				@click="categoryTabItemClick(categoryTabItem.id)">
				{{categoryTabItem.name}}
			</text>
		</view>
		<!-- 轮播图 -->
		<view class="page-section-spacing">
			<swiper class="lunbotu" indicator-dots="true" autoplay="true" interval="2000" duration="500">
				<swiper-item v-for="(carousesItem,i) in carouses" :key="carousesItem.id+''">
					<image :src="carousesItem.coverUrl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view> 
		<!-- 热门推荐 --> 
		<view v-if="!hotMoviesLoading" class="hotbox_wrap">
			<view  class="hotbox flex wrap" v-if="hotMovies.length>0">
				<view class="hotbox-item" v-for="(hotMovie,i) in hotMovies" :key="i+''">
					<view class="hotbox-item-imgbox">
						<image src="/static/movietest.jpg"></image>
						<!-- <image :src="hotMovie.url"></image> -->
						<text class="hot-score">{{hotMovie.score}}</text>
					</view>
					<view class="flex col al">
						<text>{{hotMovie.name}}</text>
					</view>
				</view>
			</view>
 			<text v-else class="hot_end_txt flex ct al">没有更多啦</text>
		</view>
		
		<view v-else class="hotloading flex ct al">
			<image src="/static/loading.png" mode=""></image>
		</view>

		<img class="label3" referrerpolicy="no-referrer"
			src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga9c086ed20f7a9445b3950b7cd95dba7df9602394ce66bed638173748242103c" />
		
		
		<text @click="goNvue">点我去哪里</text>
	</view>
</template>

<script>
	import index from './home.js';
	export default index
</script>
<style lang="less">
	@import url("./home.less");
</style>
