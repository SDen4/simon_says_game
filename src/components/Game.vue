<template>
    <div class="game__container">
        <div class="game__container_left">
            <div class="game">
                <div class="game__segment game__segment_1" :class="{active: isActive === 1}" @click="buttonClick(1)"></div>
                <div class="game__segment game__segment_2" :class="{active: isActive === 2}" @click="buttonClick(2)"></div>
                <div class="game__segment game__segment_3" :class="{active: isActive === 3}" @click="buttonClick(3)"></div>
                <div class="game__segment game__segment_4" :class="{active: isActive === 4}" @click="buttonClick(4)"></div>
            </div>
            <div class="game__start_wrapper">
                <button class="button" :class="{button__start_unactive: playing}" @click="start">Старт</button>
            </div>
        </div>
        <info-component 
            :arrayOfAi="arrayOfAi"
            :blockChoseLevel="blockChoseLevel"
            @returnLevel="selectLevel"
        ></info-component>
        <end-component
            :arrayOfAi="arrayOfAi"
            v-if="endOfGame"
            @returnToStart="readyToStart"
        ></end-component>
    </div>
</template>

<script>
    export default {
        components: {
            infoComponent: ()=> import('./Info.vue'),
            endComponent: ()=> import('./End.vue'),
        },
        data() {
            return {
                durationAI: 1500, //duration of steps
                durationEffect: 500/2, //duration of AI's button push effect
                durationBetweenRounds: 1500, //duration between rounds
                arrayOfPlayer: [], //user's steps
                arrayOfAi: [], //AI's steps
                aiPlay: true, //flag of players: user and AI
                isActive: 0, //index of active button
                playing: false, //flag for block start button during playing
                endOfGame: false,
                counter: 0, //counter for matching user's & AI's steps
                blockChoseLevel: false // block chose the level during playing game
            }
        },
        methods: {
            selectLevel(level) {
                console.log("level: " + level);
                if(level === "middle") {
                    this.durationAI = 1000;
                } else if (level === "hard") {
                    this.durationAI = 400;
                } else {
                    this.durationAI = 1500;
                }
            },
            buttonClick(i) {
                if(this.aiPlay) return;
                console.log(i);
                this.soundPlay(i);

                if(i !== this.arrayOfAi[this.counter]) {
                    this.endOfGame = true;
                }
                this.counter += 1;

                this.arrayOfPlayer.push(i);
                console.log("arrayOfPlayer: " + this.arrayOfPlayer);

                if(!this.endOfGame && this.arrayOfPlayer.length >= this.arrayOfAi.length) {
                    this.counter = 0;
                    this.aiPlay = true;
                    this.arrayOfPlayer.length = 0; // clear user's steps before next round
                    setTimeout(() => { this.handleAI() }, this.durationBetweenRounds); //next step of AI
                }
            },
            readyToStart() {
                this.arrayOfAi.length = 0;
                this.arrayOfPlayer.length = 0;
                this.counter = 0;
                this.endOfGame = false;
                this.aiPlay = true;
                this.playing = false;
                this.blockChoseLevel = false;
            },
            start() {
                if(this.playing) return;
                this.playing = true;
                this.blockChoseLevel = true;
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
                        this.aiPlay = false;
                    };
                }, this.durationAI);
            },
            activeButtonAI(i) {
                this.isActive= i;
                this.soundPlay(i);
                setTimeout(() => {
                    this.isActive = 0;
                }, this.durationEffect)
            },
            soundPlay(i) {
                const sound = new Audio(`assets/sounds/${i}.mp3`);
                sound.play();
            },
        }
    }
</script>