<template lang="pug">
	.title-wrapper
		h2 Vue/Nuxt/Vuetify/Scss를 활용한 게시판
			br
			small BackEnd:
				span.ml-2 Express/MySQL
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title-wrapper {
	margin: 3em auto;
	text-align: center;
	> h2 {
		color: $colorDarker;
		small {
			color: $colorGrey;
			span {
				color: $colorDark;
			}
		}
	}
}
</style>
