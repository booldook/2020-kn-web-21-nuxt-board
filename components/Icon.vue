<template lang="pug">
	.icon-wrap
		img(:src="src")
</template>

<script>
import path from 'path'
export default {
	name: "Icon",
	props: ['value'],
	computed: {
		src: function() {
			console.log(value)
			return '~/static/ext/'+path.extname(value)+'.png'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
