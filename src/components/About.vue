<template>
    <div class="content-container">
        <h1 class="text-center">
            Concept
        </h1>
        <div class="concept">
            <div class="concept-japanese text-right"> 
                <h4>
                    東京にイタリアの味をお届けします
                </h4>
                <p>
                    ピッツェリア・ジュリエッタは、トレンディな学芸大学エリアにあります。私たちの薪焼きピザは、熟練のイタリアの職人によって手作りされた伝統的な窯で丁寧に焼き上げられます。その結果、抵抗できないほどのスモーキーな風味と完璧にクリスピーなクラストを持つピザが出来上がり、一口食べるたびにイタリアへと思いを馳せます。ですから、ぜひ来て、私たちの心の一部をあなたと分かち合いましょう。ブオン・アペティート！
                </p>
                <img class="concept2" src="../assets/watercolor-olive-mushroom-cheese.png">
            </div>

            <div class="concept-english">
                <img class="concept1" src="../assets/watercolor-dough-tomato-basil.png">
                <h4>
                    Bringing the taste of Italy to Tokyo
                </h4>
                <p >
                    Pizzeria Giulietta is located in the hip neighborhood of Gakugeidaigaku. Our wood-fired pizzas are carefully baked in a traditional kiln, hand-built by skilled Italian artisans. The result is a pizza with an irresistable smoky flavor and perfectly crisp crust, where each bite will transport you to Italy. So, come on in and let us share a piece of our heart with you. Buon appetito!
                </p>
            </div>
        </div>
    </div>
</template>

<style scope>
	.concept {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .concept-japanese, .concept-english {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    @media (max-width: 400px) {
        .concept {
            grid-template-columns: 1fr;
            gap: 16px;
        }

        img {
            height: 60px;
            margin: auto;
        }

        .concept-japanese {
            text-align: left;
        }

        .concept-english {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-areas:
                "english-title"
                "english-text"
                "concept1";
        }

        .concept-english h4 { grid-area: english-title; } 
        .concept-english p { grid-area: english-text; } 
        .concept-english img { grid-area: concept1; } 

    }
</style>