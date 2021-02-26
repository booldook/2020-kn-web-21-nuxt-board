<template lang="pug">
	.list-wrapper
		.title-wrapper
			h2 Nuxt / Vue를 활용한 게시판
		v-data-table(:headers="headers" :items="list" :items-per-page="2" class="elevation-1" @click:row="handleClick")
</template>
<script>
import moment from 'moment'

export default {
	name: 'list',
	layout: 'board',
	data() {
		return {
			headers: [
				{ text: '번호', align: 'center', sortable: true, value: 'id',},
				{ text: '제목', value: 'title' },
				{ text: '작성자', value: 'writer', align: 'center' },
				{ text: '작성일', value: 'wdate', align: 'center' },
				{ text: '첨부파일', value: 'orifile', align: 'center' },
				{ text: '조회수', value: 'readnum', align: 'center' },
			]
		}
	},
	async asyncData({ $axios, store, params, query }) {
		try {
			let { data } = await $axios.get('http://127.0.0.1:3000/api/list')
			console.log(data)
			let list = data.map(v => {
				v.wdate = moment(v.created).format('YYYY-MM-DD')
				return v
			});
			return { list }
		}
		catch(e) {
			console.log(e)
		}
	},
	methods: {
		handleClick(e) {
			console.log(e.id)
		}
	}
}
</script>
<style lang="scss">
	.title-wrapper {
		text-align: center;
		color: $colorDarker;
		padding: 1em;
		margin: 2em 0;
	}
	table {
		td {
			text-align: center;
			&:nth-child(2) {text-align: left;}
		}
	}
</style>