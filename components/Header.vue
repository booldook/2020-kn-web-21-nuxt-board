<template lang="pug">
	header.header-wrapper
		.logo
			i.fa.fa-sun
			nuxt-link(to='/') BOOLDOOK
		ul.navi-wrapper
			li.navi
				nuxt-link(to='/') Nuxt-Board
			li.navi
				a(href='http://127.0.0.1:3000/board') Express-Board
			li.navi
				a(href='http://127.0.0.1:3000/gallery') Express-Gallery
</template>
<script>
export default {
	name: 'Header',
}
</script>
<style lang="scss" scoped>
.header-wrapper {
	color: $colorLighter;
	background-color: $colorDarker;
	@include flex($FS, $CT);
	.logo {
		@include flex($FS, $CT);
		padding: 1em;
		i {
			margin-right: 1em;
		}
	}
	.navi-wrapper {
		@include flex($FS, $CT);
		.navi {
			padding: 1em;
		}
	}
}
</style>