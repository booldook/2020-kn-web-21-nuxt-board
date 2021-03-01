<template lang="pug">
	v-app.global-wrapper(dark)
		Header
		Title
		nuxt.nuxt-wrapper
</template>
<script>
import Title from "~/components/Title.vue"
import Header from "~/components/Header.vue"
export default {
	components: { Header, Title }
}
</script>
<style lang="scss" scoped>
	.global-wrapper{
		.nuxt-wrapper {
			width: 96%;
			max-width: 1200px;
			margin: 0 auto;
		}
  }
</style>
