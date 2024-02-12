<script setup lang="ts">
defineProps({
    japanese: {
    type: String,
    default: '' 
  },
  english: {
    type: String,
    default: ''
  },
  ingredients: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
})
</script>

<template>
    <span class="menu-items">
        <span class="name-ingr">
            <span class="item-name">
                <p>{{ japanese }}</p>
                <p>{{ english }}</p>
            </span>
            <p class="ingredients">{{ ingredients }}</p>
        </span>
        <p>¥{{ price }}</p>
    </span>
</template>

<style scoped>

.menu-items {
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
}
.item-name {
    display: flex;
    gap: 16px;
}
.name-ing {
    display: flex;
    flex-direction: column;
}
.ingredients {
    font-size: 12px;
}

@media (max-width: 500px) {
    .item-name {
        flex-direction: column;
        gap: 2px;
    }
}
</style>