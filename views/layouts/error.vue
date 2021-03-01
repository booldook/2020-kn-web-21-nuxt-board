<template lang="pug">
	div
		h1(v-if="error.statusCode === 404") Page not found
		h1(v-else="") An error occured
		NuxtLink(to="/") Home Page
</template>

<script>
export default {
	props: ['error'],
	layout: 'error',
	head() {

	},
	data() {
		return {

		}
	}
}
</script>

<style>

</style>
