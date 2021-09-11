export default {
	data() {
		return {
			// 标签分类栏
			categoryTabs: [],
			categoryTabsAction: 0,

			carouses: [],
			// 热门推荐
			hotMovies: [],
			hotMoviesLoading: false
		}
	},
	async onLoad() {
		this.initApi()
		// 打印调用成功回调
	},
	methods: {

		async initApi() {
			this.categoryList()
			await this.carouselist()
			this.hotMovieList(this.categoryTabsAction)
		},

		/* api */
		// tab电影分类
		async categoryList() {
			let res = await this.$request('/v1/categoryList')
			if (res.code != 200) console.log("请求异常")
			this.categoryTabs = res.content
			this.categoryTabsAction = this.categoryTabs[0].id
		},
		// 轮播图
		async carouselist() {
			let res = await this.$request('/v1/carouselist')
			if (res.code != 200) console.log("请求异常")
			this.carouses = res.content
		},
		// 热播视频
		async hotMovieList(categoryId) {
			this.hotMoviesLoading = true
			let res = await this.$request('/v1/hotMovieList', {
				categoryId
			})
			if (res.code != 200) return uni.showToast({
				title: '热播视频请求失败',
				icon: 'none'
			})
			this.hotMovies = res.content.list;
			this.hotMoviesLoading = false
		},

		/* event */
		// 标签分类栏
		categoryTabItemClick(categoryId) {
			this.categoryTabsAction = categoryId
			// send ajax 请求
			this.hotMovieList(categoryId)
		},
		
		
		/* 跳转router */
		goNvue(){
			uni.navigateTo({
				url:'/pages/wunai/wunai'
			})
		}
	}
}
