<script setup lang="ts">
import { ref } from 'vue';

const isToggled = ref(false);

function toggleMenu() {
  isToggled.value = !isToggled.value;
}

const screenWidth = ref(window.innerWidth);
</script>

<template>
    <div 
	    class="
			header-container
			w-full
			header-text
            flex 
            justify-between 
			items-center
            py-4
            px-10 
            bg-black/80
			text-white
        "
	>
		<a
			href="#hero"
			class="
				neonText
				header-name 
				flex
				flex-col
				gap-2
				items-center
				leading-none
			"
		>
			<span class="text-[20px] tracking-[4px]">PIZZERIA</span>
			<span class="text-[24px] tracking-[6px]">GIULIETTA</span>
		</a>
		
		<a class="menu-toggle" @click="toggleMenu">
			<span :class="{ 'rotate-first': isToggled }"></span>
			<span :class="{ 'fade-out': isToggled }"></span>
			<span :class="{ 'rotate-third': isToggled }"></span>
		</a>

		<nav 
			v-if="isToggled || screenWidth > 400"
			class="flex gap-[48px] leading-none tracking-[2px] text-[16px]"
		>
			<a href="#about" class="neonText">
				Concept
			</a>
			<a href="#menu" class="neonText">
				Menu
			</a>
			<a href="#info" class="neonText">
				Info
			</a>
			<a 
				class="neonText" 
				href="https://www.hotpepper.jp/strJ003715082/yoyaku/?vos=othpporgzzzzx00000001"
				target="_blank" rel="noopener noreferrer"	
			>
				Reservation
			</a>
		</nav>
	</div>
</template>

<style scoped>
.neonText:hover {
	text-shadow:
		0 0 3px #fff,
		0 0 7px #ec811f,
		0 0 10px #f45f0c,
		0 0 21px #f32a17,
		0 0 21px #f32a17
}

@media (max-width: 400px) {
	.header-name {
		margin: auto;
	}
	.menu-toggle{
		position: absolute;
		left: 24px;
		top: 42px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.menu-toggle span {
		background-color: white;
		height: 1px;
		width: 20px;
		transition: all 0.5s ease;
	}
	.rotate-first {
		transform: rotate(45deg) translate(1px, 6px);
	}
	.rotate-third {
		transform: rotate(-45deg) translate(1px, -6px);
	}
	.fade-out {
		opacity: 0;
	}
	.header-container {
		flex-direction: column;
		gap: 32px;
		text-align: center;
	}
	nav {
		flex-direction: column;
	}
}
</style>