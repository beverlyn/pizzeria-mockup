<script setup lang="ts">
import { ref } from 'vue';
import MenuFood from "./MenuFood.vue";
import MenuDrinks from "./MenuDrinks.vue";

const showFood = ref('food');

function toggleMenuType(menuType: string) {
    if (menuType == "food") {
        showFood.value = "food";
    } else {
        showFood.value = "drink";
    }
}

</script>

<template>
    <div class="content-container">
        <h1 class="text-center">
            Menu
        </h1>

        <div class="button-container flex gap-[80px] m-auto w-min mb-8">
            <button @click="toggleMenuType(`food`)">
                <h3 class="flex items-center gap-2">
                    <IconAkarIconsUtensils/>
                    Food
                </h3>
            </button>

            <button @click="toggleMenuType(`drink`)">
                <h3 class="flex items-center gap-1">
                    <IconStreamlineFoodDrinksWineBottleCookBottleWineDrinkCookingNutritionFood/>
                    Drinks
                </h3>
            </button>
        </div>
        <MenuFood v-if="showFood == `food`"/>
        <MenuDrinks v-if="showFood == `drink`"/>
    </div>
</template>

<style scoped>
button {
    padding: 4px 16px;
    border-radius: 25px;
}
button:hover {
    outline: 4px solid black;
}

@media (max-width: 400px) {
    .button-container {
        width: 100%;
        gap: 0;
        justify-content: space-between;
    }
}
</style>
