<template lang="pug">
	.view-wrapper
		v-card.card-wrapper(color="white" elevation="2")
			v-card-title {{list.title}}
			v-divider
			v-card-subtitle.my-4.card-subtitle
				v-row
					v-col(cols="12" md="4")
						span.subtitle-2 작성자:
						span.subtitle-1.ml-2 {{list.writer}}
					v-col(cols="12" md="4")
						span.subtitle-2 작성일:
						span.subtitle-1.ml-2 {{list.wdate}}
					v-col(cols="12" md="4")
						span.subtitle-2 조회수:
						span.subtitle-1.ml-2 {{list.readnum}}
			v-divider
			v-card-text.card-content(v-html="list.content")
			div(v-if="list.savefile")
				div(v-if="list.isImg")
					v-img.imgx(:src="list.file")
				div.my-4
					v-divider.mb-3
					span.subtitle-2 다운로드:
					a.subtitle-1.ml-2(:href="downloadLink(list.id)") {{list.orifile}}
		nuxt-link(to="/")
			v-btn.my-4.mx-auto.d-block(color="teal grey--text text--lighten-4") LIST
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { isImage, filePath } from '~/modules/util'

export default {
	name: 'detail.id',
	layout: 'layout-default',
	async asyncData({ params }) {
		let { data } = await axios.get(`http://127.0.0.1:3000/api/view/${ params.id }`)
		let list = data
		list.wdate = moment(list.created).format('YYYY-MM-DD HH:mm:ss');
		if(list.savefile) {
			list.file = filePath(list.savefile)
			list.isImg = isImage(list.savefile)
		}
		return { list }
	},
	methods: {
		downloadLink(id) {
			return `${process.env.SERVER}/api/download/${id}`
		}
	}
}
</script>

<style lang="scss" scoped>
	.view-wrapper {
		padding-bottom: 4em;
		.card-wrapper {
			padding: 2em 1em;
			.card-subtitle {
				span {
					&:first-child {
						color: $colorDarker
					}

					&:last-child {
						color: $colorDark
					}
				}
			}
			.card-content {
				color: $colorDarker;
				min-height: 200px;
			}
		}
	}
</style>
