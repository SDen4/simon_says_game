<template>
    <div class="main__wrapper">
        <div 
            class="main__title_wrapper"
            v-if="!rules"
        >
            <h1 class="main__title">Simon Says Game</h1>
            <button 
                class="button"
                @click="openRules"
            >Правила</button>
        </div>
        <game-component
            v-if="!rules"
        ></game-component>
        <rules-component
            v-if="rules"
            @closeRules="closeRules"
        ></rules-component>
        <div
            class="main__author"
            v-if="!rules"
        >
            <span class="main__author_text">Разработано: </span>
            <a
                class="link"
                href="https://github.com/SDen4"
                target="_blank"
            >
                Скрябин Денис
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                rules: false,
                game: true
            }
        },
        components: {
            gameComponent: ()=> import('./Game.vue'),
            rulesComponent: ()=> import('./Rules.vue'),
        },
        methods: {
            openRules() {
                this.rules = true
            },
            closeRules() {
                this.rules = false
            }
        }
    }
</script>