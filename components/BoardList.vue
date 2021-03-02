<template lang="pug">
	v-data-table.my-5(:headers="headers" :items="list" :items-per-page="5" class="list-tb elevation-2")
		template(v-slot:item="{item}")
			//- tr(@click="onClick(item.id)")
			tr
				td.text-center {{item.id}}
				td.text-left.bold.pointer
					nuxt-link(:to="`/detail/${item.id}`") {{item.title}}
				td.text-center {{item.writer}}
				td.text-center.icon
					img.img(v-show="item.savefile" :src="srcIcon(item.savefile)")
				td.text-center {{item.wdate}}
				td.text-center {{item.readnum}}
</template>

<script>
import Icon from '~/components/Icon.vue'
import path from 'path'

export default {
	name: "BoardList",
	props: ['list'],
	components: { Icon },
	data() {
		const headerOptions = { class: "teal lighten-3 grey--text text--darken-4", align: 'center' }
		return {
			headers: [
				{ text: '번호', sortable: true, value: 'id', width: '10%', ...headerOptions },
				{ text: '제목', value: 'title', ...headerOptions },
				{ text: '작성자', value: 'writer', width: '15%', ...headerOptions },
				{ text: '파일', value: 'icon', width: '10%', ...headerOptions },
				{ text: '작성일', value: 'wdate', width: '15%', ...headerOptions },
				{ text: '조회수', value: 'readnum', width: '10%', ...headerOptions },
			]
		}
	},
	methods: {
		onClick(id) {
			this.$router.push('/detail/' + id)
		},
		srcIcon(savefile) {
			if(savefile) {
				return `/ext/${path.extname(savefile).substr(1).toLowerCase()}.png`
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.list-tb {
	.icon {
		img {
			margin: 0.5em;
			width: 40px;
		}
	}
}
</style>
