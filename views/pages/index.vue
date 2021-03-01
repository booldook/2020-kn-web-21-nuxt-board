<template lang="pug">
	.index-wrapper
		BoardList(:list="list")
		a(href="http://127.0.0.1:3000/board/create")
			v-btn.my-4.mx-auto.d-block(color="teal grey--text text--lighten-4") 글작성
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import BoardList from '~/components/BoardList.vue'
import { ext } from '~/modules/util'

export default {
	name: 'index',
	layout: 'layout-default',
	head() {

	},
	data() {

	},
	async asyncData() {
		let { data } = await axios.get(`http://127.0.0.1:3000/api/list`)
		let list = data.map(v => {
			v.wdate = moment(v.created).format('YYYY-MM-DD');
			return v
		})
		return { list }
	},
	components: { BoardList },
}
</script>

<style lang="scss" scoped>
	.index-wrapper {
		text-align: center;
    padding: 1em;
	}
</style>
