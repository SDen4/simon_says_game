<template>
    <div>
        <div class="game">
            <div class="game__wrapper">
                <div class="game__segment game__segment_1" :class="{active: isActive === 1}" @click="buttonClick(1)">1</div>
                <div class="game__segment game__segment_2" :class="{active: isActive === 2}" @click="buttonClick(2)">2</div>
                <div class="game__segment game__segment_3" :class="{active: isActive === 3}" @click="buttonClick(3)">3</div>
                <div class="game__segment game__segment_4" :class="{active: isActive === 4}" @click="buttonClick(4)">4</div>
            </div>
        </div>
        <button class="test" @click="start">Start</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                durationAI: 500,
                durationEffect: 500/2,
                arrayOfPlayer: [],
                arrayOfAi: [],
                aiPlay: true,
                steps: 1,
                isActive: 0
            }
        },
        methods: {
            soundPlay(i) {
                const sound = new Audio(`assets/sounds/${i}.mp3`);
                sound.play();
            },
            activeButtonAI(i) {
                this.isActive= i;
                this.soundPlay(i);
                setTimeout(() => {
                    this.isActive = 0;
                }, this.durationEffect)
            },
            buttonClick(i) {
                console.log(i);
                this.soundPlay(i);
            },
            start() {
                this.handleAI();
            },
            handleAI() {
                if(!this.aiPlay) return;
                let segmAi = Math.floor(1 + Math.random()*4); // random number from 1 to 4
                this.arrayOfAi.push(segmAi);
                this.handleAIDo(this.arrayOfAi);
            },
            handleAIDo(array) {
                console.log(array);
                let durationStopAi = 0;
                let interval = setInterval(() => {
                    let item = array[durationStopAi];
                    durationStopAi += 1;
                    this.activeButtonAI(item);
                    if(durationStopAi >= array.length) {
                        durationStopAi = 0;
                        clearInterval(interval);
                    };
                }, this.durationAI);
            }
        }
    }
</script>