<script setup lang="ts">
import MenuItems from './MenuItems.vue';
</script>

<template>
<div class="food-menu flex flex-col gap-10">
    <div class="menu-section wine">
        <h2 class="flex gap-2 items-center"> 
            Wine 
            <IconStreamlineWine class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="キャンティ" english="Chianti" price="550"/>
            <MenuItems japanese="ピノ・グリージョ" english="Pinot Grigio" price="550"/>
            <MenuItems japanese="プロセッコ" english="Prosecco" price="550"/>
            <MenuItems japanese="バローロ" english="Barolo" price="550"/>
            <MenuItems japanese="ソアーヴェ" english="Soave" price="550"/>
            <MenuItems japanese="モンテプルチアーノ・ダブルッツォ " english="Montepulciano d'Abruzzo" price="550"/>
        </div>
    </div>
    <div class="menu-section cocktails">
        <h2 class="flex gap-2 items-center"> 
            Cocktails 
            <IconMynauiCocktail class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="ネグローニ" english="Negroni" price="550"/>
            <MenuItems japanese="アペロール・スプリッツ" english="Aperol Spritz" price="550"/>
            <MenuItems japanese="リモンチェッロ" english="Limoncello" price="550"/>
            <MenuItems japanese="グラッパ" english="Grappa" price="550"/>
        </div>
    </div>
    <div class="menu-section noalcohol">
        <h2 class="flex gap-2 items-center"> 
            Non-alcoholic 
            <IconFluentDrinkBottle20Regular  class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="クロディーノ" english="Crodino" price="550"/>
            <MenuItems japanese="オルザータ" english="Orzata" price="550"/>
            <MenuItems japanese="レモネード" english="Lemonade" price="550"/>
            <MenuItems 
                japanese="サンペレグリノ" 
                english="San Pellegrino" 
                ingredients="プレーン, オレンジ, ブラッドオレンジ, リモナータ, グレープフルーツ" 
                price="550"/>
            <MenuItems japanese="ソーダ" english="Soda" ingredients="コカ・コーラ, ジンジャーエール" price="550"/>
        </div>
    </div>

    <div class="menu-section coffee">
        <h2 class="flex gap-2 items-center"> 
            Coffee 
            <IconLucideCoffee  class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="エスプレッソ" english="Espresso" price="550"/>
            <MenuItems japanese="カプチーノ" english="Cappuccino" price="550"/>
            <MenuItems japanese="ラテ・マキアート" english="Latte Macchiato" price="550"/>
            <MenuItems japanese="アフォガート" english="Affogato" price="550"/>
        </div>
    </div>
</div>
</template>

<style scoped>
.food-menu h2 {
    font-family: "Lobster";
    letter-spacing: 4px;
}
.menu-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.menu-food {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>
