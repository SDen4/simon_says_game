<template>
    <div class="game__container">
        <div
            class="game__container_left"
            v-if="!endOfGame"
        >
            <div class="game">
                <ul class="game__segments_list">
                    <li class="game__segment game__segment_1" :class="{active: isActive === 1}" @click="segmentUserClick(1)"></li>
                    <li class="game__segment game__segment_2" :class="{active: isActive === 2}" @click="segmentUserClick(2)"></li>
                    <li class="game__segment game__segment_3" :class="{active: isActive === 3}" @click="segmentUserClick(3)"></li>
                    <li class="game__segment game__segment_4" :class="{active: isActive === 4}" @click="segmentUserClick(4)"></li>
                </ul>
            </div>
            <div class="game__start_wrapper">
                <button class="button" :class="{button__start_unactive: playing}" @click="start">Старт</button>
            </div>
        </div>
        <info-component
            v-if="!endOfGame"
            :round="arrayOfAi.length"
            :blockChoseLevel="blockChoseLevel"
            @returnLevel="selectLevel"
        ></info-component>
        <end-component
            v-if="endOfGame"
            :round="arrayOfAi.length"
            @returnToStart="readyToStart"
        ></end-component>
    </div>
</template>

<script>
    export default {
        components: {
            infoComponent: ()=> import('./Info.vue'),
            endComponent: ()=> import('./End.vue')
        },
        data() {
            return {
                durationAI: 1500, //duration of steps
                durationEffect: 300, //duration of AI's button push effect
                durationBetweenRounds: 1000, //duration between rounds
                arrayOfPlayer: [], //user's steps
                arrayOfAi: [], //AI's steps
                aiPlay: true, //flag of players: user and AI
                isActive: 0, //index of active button
                playing: false, //flag for block start button during playing
                endOfGame: false, //flag for end-component
                counter: 0, //counter for matching user's & AI's steps
                blockChoseLevel: false // block chose the level during playing game
            }
        },
        methods: {
            //selecting the level
            selectLevel(level) {
                if(level === "middle") {
                    this.durationAI = 1000;
                } else if (level === "hard") {
                    this.durationAI = 400;
                } else {
                    this.durationAI = 1500;
                }
            },
            //user's clicks on segments
            segmentUserClick(i) {
                if(this.aiPlay) return;
                this.soundPlay(i);

                //matching results
                if(i !== this.arrayOfAi[this.counter]) {
                    this.endOfGame = true;
                }
                this.counter += 1;
                this.arrayOfPlayer.push(i);

                //next step of AI
                if(!this.endOfGame && this.arrayOfPlayer.length >= this.arrayOfAi.length) {
                    this.counter = 0;
                    this.aiPlay = true;
                    this.arrayOfPlayer.length = 0; // clear user's steps before next round
                    setTimeout(() => { this.AIStepGenerator() }, this.durationBetweenRounds); //next step of AI
                }
            },
            //clear the settings before again new game
            readyToStart() {
                this.arrayOfAi.length = 0;
                this.arrayOfPlayer.length = 0;
                this.counter = 0;
                this.endOfGame = false;
                this.aiPlay = true;
                this.playing = false;
                this.blockChoseLevel = false;
            },
            //start the game
            start() {
                if(this.playing) return;
                this.playing = true;
                this.blockChoseLevel = true;
                this.AIStepGenerator();
            },
            //AI's generation new step
            AIStepGenerator() {
                if(!this.aiPlay) return;
                let segmAi = Math.floor(1 + Math.random()*4); //random number from 1 to 4
                this.arrayOfAi.push(segmAi);
                this.AIClick(this.arrayOfAi);
            },
            //AI's 
            AIClick(array) {
                let durationStopAi = 0;
                let interval = setInterval(() => {
                    let item = array[durationStopAi];
                    durationStopAi += 1;
                    this.AIClickActive(item);
                    if(durationStopAi >= array.length) {
                        durationStopAi = 0;
                        clearInterval(interval);
                        this.aiPlay = false;
                    };
                }, this.durationAI);
            },
            //AI's activation segments
            AIClickActive(i) {
                this.isActive = i;
                this.soundPlay(i);
                setTimeout(() => {
                    this.isActive = 0;
                }, this.durationEffect)
            },
            //sounds
            soundPlay(i) {
                const sound = new Audio(`assets/sounds/${i}.mp3`);
                sound.play();
            },
        }
    }
</script>