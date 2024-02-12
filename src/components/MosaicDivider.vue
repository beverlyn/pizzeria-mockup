<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  const container = document.getElementById('mosaic-div');
  const backgroundPositionX = window.scrollY * 0.7;
  container.style.backgroundPosition = `-${backgroundPositionX}px 0px`;
}
</script>

<template>
    <div id="mosaic-div" class="mosaic-top">
    </div>
</template>

<style scoped>
.mosaic-top {
    width: 100%;
    height: 100px;
    background-image: url('../assets/mosaic-test.svg');
    background-repeat: repeat;
    background-size: 175px 50px; 
}

</style>