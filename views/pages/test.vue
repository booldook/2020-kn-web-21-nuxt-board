<template lang="pug">
	div.wrapper
		h1 Hello Test
</template>
<script>
export default {
	layout: 'board',
	transitions: 'fade',
}
</script>
<style lang="scss" scoped>
	.wrapper {
		h1 {color: $colorGrey;}
	}
</style>