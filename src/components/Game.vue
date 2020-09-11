<template>
    <div>
        <div class="game">
            <div class="game__wrapper">
                <div class="game__segment game__segment_1" @click="buttonClick(1)">1</div>
                <div class="game__segment game__segment_2" @click="buttonClick(2)">2</div>
                <div class="game__segment game__segment_3" @click="buttonClick(3)">3</div>
                <div class="game__segment game__segment_4" @click="buttonClick(4)">4</div>
            </div>
        </div>
        <button class="test" @click="start">Start</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrayOfPlayer: [],
                arrayOfAi: [],
                aiPlay: true,
                steps: 1
            }
        },
        methods: {
            buttonClick(i) {
                console.log(i);
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
                
                let interval = setInterval((array) => {
                    
                
                //     durationStopAi += 1;
                //     // console.log(segments[segmAi-1])
                //     // console.log("durationStopAi: " + durationStopAi + "; steps: " + steps);
                //     console.log("arrayOfAi: " + this.arrayOfAi);
                    
                //     if(durationStopAi >= this.steps) {
                //         clearInterval(interval);
                //         this.aiPlay = false;
                //         console.log("steps in Ai end: " + this.steps);
                //         // player(steps);
                //         return;
                //     }
                }, 500);
            },
            handlePlayer() {
            }
        }
    }
</script>