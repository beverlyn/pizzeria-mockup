<template>
    <span class="neon-text">
        <slot name="neonText"></slot>
	</span>
</template>

<style scoped>
.neon-text {
	color: #fff;
	text-shadow:
		0 0 3px #fff,
		0 0 7px #ec811f,
		0 0 10px #f45f0c,
		0 0 21px #f32a17,
		0 0 21px #f32a17
}
</style>