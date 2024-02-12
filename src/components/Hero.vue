<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const opacity = ref(1);
const width = ref(100);
const height = ref(100);

function updateBackground() {
  const scrollY = window.scrollY;
  const opacityRate = 0.001;
  const zoomFactor = 0.15;
  opacity.value = Math.max(0, 1 - scrollY * opacityRate);
  width.value = 100 + scrollY * zoomFactor; 
  height.value = 100 + scrollY * zoomFactor; 
}

const backgroundStyle = ref({
  opacity: opacity.value, 
  width: `${width.value}%`,
  height:  `${height.value}%`
});

watchEffect(() => {
  backgroundStyle.value.opacity = opacity.value;
  backgroundStyle.value.width = `${width.value}%`;
  backgroundStyle.value.height = `${height.value}%`;
  window.addEventListener('scroll', updateBackground);
});

watchEffect(onCleanup => {
  onCleanup(() => {
    window.removeEventListener('scroll', updateBackground);
  });
});
</script>

<template>
	<div class="hero">
		<div class="hero-background" :style="backgroundStyle"></div>
		<img src="../assets/logo-white.svg" class="hero-logo"/>
	</div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/pizza-oven.jpg');
  background-size: cover;
  background-position: center;
  transition: transform 0.2s, opacity 0.2s ease;
  z-index: -1;
}
.hero-logo {
  height: 80%;
  margin: auto;
}
</style>