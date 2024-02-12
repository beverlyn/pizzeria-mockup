<script setup lang="ts">
import MenuItems from './MenuItems.vue';
</script>

<template>
<div class="food-menu flex flex-col gap-10">
    <div class="menu-section appetizers">
        <h2 class="flex gap-2 items-center"> 
            Appetizers 
            <IconStreamlineFoodKitchenwareServingDomeCookToolDomeKitchenServingPaltterDishToolsFood class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="ブルスケッタ" english="Bruschetta" price="550"/>
            <MenuItems japanese="アランチーニ" english="Arancini" price="550"/>
            <MenuItems japanese="アンティパストプラッター" english="Antipasto Platter" price="550"/>
            <MenuItems japanese="プロシュットとメロン" english="Prosciutto e Melone" price="550"/>
            <MenuItems japanese="ズッキーニのフリッタータ" english="Frittata di Zucchine" price="550"/>
            <MenuItems japanese="クロスティーニ コン フンギ " english="Crostini con Funghi" price="550"/>

        </div>
    </div>

    <div class="menu-section salad">
        <h2 class="flex gap-2 items-center"> 
            Salad 
            <IconFluentBowlSalad24Regular class="text-[24px]"/> 
        </h2>
        <div class="menu-food">
            <MenuItems japanese="カプレーゼサラダ" english="Caprese Salad" price="550"/>
            <MenuItems japanese="シーザーサラダ" english="Caesar Salad" price="550"/>
            <MenuItems japanese="海のサラダ" english="Insalata di Mare" price="550"/>
            <MenuItems japanese="ルッコラとパルミジャーノ" english="Arugula and Parmesan" price="550"/>
        </div>
    </div>

    <div class="menu-section pizza">
        <h2 class="flex gap-2 items-center"> 
            Pizza 
            <IconLucidePizza class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="マルゲリータ" english="Margherita" ingredients="トマトソース、モッツァレラチーズ、バジル" price="1550"/>
            <MenuItems japanese="ペパロニ" english="Pepperoni" ingredients="トマトソース、モッツァレラチーズ、ペパロニ" price="1550"/>
            <MenuItems japanese="クアトロ・フォルマッジ" english="Quattro Formaggi" ingredients="モッツァレラ、ゴルゴンゾーラ、パルメザン、フォンティーナチーズ" price="1550"/>
            <MenuItems japanese="ハワイアン" english="Hawaiian" ingredients="トマトソース、モッツァレラチーズ、ハム、パイナップル" price="1550"/>
            <MenuItems japanese="ディアボラ" english="Diavola" ingredients="トマトソース、モッツァレラチーズ、辛いサラミ" price="1550"/>
            <MenuItems japanese="フンギ" english="Funghi" ingredients="トマトソース、モッツァレラチーズ、マッシュルーム" price="1550"/>
        </div>
    </div>
    <div class="menu-section pasta">
        <h2 class="flex gap-2 items-center"> 
            Pasta 
            <IconMdiPasta class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="カルボナーラ" english="Carbonara" price="550"/>
            <MenuItems japanese="ラザニア" english="Lasagna" price="550"/>
            <MenuItems japanese="ペンネ アラビアータ" english="Penne all'Arrabbiata" price="550"/>
            <MenuItems japanese="フェットチーネ アルフレード" english="Fettuccine Alfredo" price="550"/>
        </div>
    </div>

    <div class="menu-section dessert">
        <h2 class="flex gap-2 items-center"> 
            Dessert 
            <IconEpDessert class="text-[24px]"/>
        </h2>
        <div class="menu-food">
            <MenuItems japanese="ティラミス" english="Tiramisu" price="550"/>
            <MenuItems japanese="ジェラート" english="Gelato" ingredients="本日のフレーバー Flavor of the day" price="550"/>
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
