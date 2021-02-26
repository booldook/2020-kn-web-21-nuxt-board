<template lang="pug">
	.container-wrapper
		Header
		.global-wrapper
			nuxt.next-wrapper
</template>
<script>
import Header from '~/components/Header.vue'
export default {
	name: 'board',
	components: { Header }
}
</script>
<style lang="scss">
	.container-wrapper {
		.global-wrapper {
			max-width: 1200px;
			margin: auto;
		}
	}
</style>