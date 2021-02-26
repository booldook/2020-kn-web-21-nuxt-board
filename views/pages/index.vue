<template lang="pug">
	.list-wrapper
		v-data-table(:headers="headers" :items="list" :items-per-page="2" class="elevation-1")
</template>
<script>
export default {
	name: 'list',
	layout: 'board',
	data() {
		return {
			headers: [
				{ text: '번호', align: 'center', sortable: true, value: 'id',},
				{ text: '제목', value: 'title' },
				{ text: '작성자', value: 'writer' },
				{ text: '작성일', value: 'created' },
				{ text: '첨부파일', value: 'savefile' },
				{ text: '조회수', value: 'readnum' },
			]
		}
	},
	async asyncData({ $axios, store }) {
		try {
			let { data: list } = await $axios.get('http://127.0.0.1:3000/api/list')
			return { list }
		}
		catch(e) {
			console.log(e)
		}
	},
}
</script>
<style lang="scss">
	
</style>