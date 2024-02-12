<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import MosaicDivider from "./components/MosaicDivider.vue";
import Menu from "./components/Menu.vue"
import StoreInfoDiviver from "./components/StoreInfoDiviver.vue";
import StoreInfo from "./components/StoreInfo.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
	<NavigationBar class="fixed top-0 z-[999]"/>
	<section id="hero">
		<Hero/>
	</section>
	<section id="about">
		<About/>
	</section>
	<MosaicDivider/>
	<section id="menu">
		<Menu/>
	</section>
	<StoreInfoDiviver/>
	<section id="info">
		<StoreInfo/>
	</section>
	<Footer/>
</template>

<style scoped>
.neonText {
	color: #fff;
	font-size: 20px;
}
.neonText:hover {
	/* color: #f9ebc5; */
	text-shadow:
		0 0 3px #fff,
		0 0 7px #ec811f,
		0 0 10px #f45f0c,
		0 0 21px #f32a17,
		0 0 21px #f32a17
}
</style>