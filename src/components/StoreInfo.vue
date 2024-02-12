<template>
    <div class="content-container">
        <h1 class="text-center">
            Store Info
        </h1>

        <div class="info-section flex gap-4">
            <div class="map">
            </div>
            <div class="flex flex-col gap-6">
                <span class="map-info flex gap-4">
                    <IconMaterialSymbolsMapOutline class="text-[20px]" />
                    <span>
                        <p>〒152-0001 東京都目黒区中央町1丁目4-13 1F</p>
                        <a 
                            href="https://maps.app.goo.gl/CcEv9sw7sqoB3Gu8A"
                            class="google-maps"
                        > 
                            >>> Google Maps 
                        </a>
                    </span>
                </span>
                <span class="flex gap-4">
                    <IconMaterialSymbolsCalendarMonthOutline class="text-[20px]"/>
                    <span>
                        <span>
                            <p>ランチ Lunch: 11:30 ~ 14:30 <span class="text-[12px]">(LO 14:00)</span></p>
                        </span>
                        <span>
                            <p>ディナー Dinner: 17:30 ~ 21:30 <span class="text-[12px]">(LO 21:00)</span></p>
                        </span>
                        <span>
                            <p>定休日 Closed: 日曜日、月曜日は第1・第3
                                <br>
                                Sunday, 1st/3rd Monday of the month
                            </p>
                        </span>
                    </span>
                </span>
                <span class="flex gap-4 items-center">
                    <IconBiTelephone class="text-[20px]"/>
                    <p>03-5724-3271</p>
                </span>
                <span  class="flex gap-4 items-center">
                    <IconMdiInstagram class="text-[20px]"/>
                    <a 
                        href="https://www.instagram.com/pizzeria_giulietta_tokyo/"
                        target="_blank" rel="noopener noreferrer"    
                    >
                        @pizzeria_giulietta_tokyo
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-section {
    flex-direction: row;
}
.map {
    background-image: url("../assets/google-maps.png");
    background-size: cover;
    background-position: center;
    min-width: 300px;
    width: 100%;
    max-width: 400px;
    height: 300px;
}

.map-info {
    align-items: center;
}

.google-maps {
        display: none;
    }

@media (max-width: 750px) {
    .info-section {
        flex-direction: column;
    }
    .map {
        margin: auto;
        max-width: 100%;
    }
}

@media (max-width: 400px) {
    .map {
        display: none;
    }
    .map-info {
        align-items: start;
    }
    .google-maps {
        display: block;
    }
}
</style>
