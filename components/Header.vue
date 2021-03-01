<template lang="pug">
	header.header-wrapper
		.logo.py-2.px-4
			nuxt-link(to="/")
				v-avatar(color="booldook" size="48") BK
		ul.navi-wrapper
			.navi
				a(href="http://127.0.0.1:3000") Node/Express Board
			.navi
				a(href="http://127.0.0.1:5000") React/Nuxt Board
</template>

<script>
export default {
	name: "Headers"
}
</script>

<style lang="scss" scoped>
.header-wrapper {
	background-color: $colorDarker;
	color: $colorLighter;
  @include flex($SB, $CT);
	border-bottom: 1px solid $colorLighter;
	align-items: center;
	.logo {
		padding: 0 1.5em;
  }
	.navi-wrapper {
    @include flex($SB, $CT);
		align-items: center;
		.navi {
			padding: 0.75em 1.5em;
    }
  }
}
</style>
