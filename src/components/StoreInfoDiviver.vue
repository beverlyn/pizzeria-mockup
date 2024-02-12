<template>
    <div class="store-divider h-[400px] flex items-center overflow-hidden">
        <div class="layer1 h-full m-auto bg-black/80" >
            <img src="../assets/divider-storefront.png" class="h-full m-auto"/>  
        </div>
    </div>
</template>

<style scoped>
.store-divider {
    background-image: url("../assets/divider-storefront.png");
    background-size: cover;
    background-position: center;
    height: 400px;
}

.layer1 {
    width: 100%;
}

.pizza-divider img {
    height: 300px;
}

@media (max-width: 400px) {
    .store-divider {
        height: 200px;
    }
    img {
        width: 100vw;
    }
}
</style>