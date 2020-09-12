<template>
    <div class="main__wrapper">
        <h1 class="main__title">Simon The Game</h1>
        <game-component></game-component>
    </div>
</template>

<script>
    export default {
        components: {
            gameComponent: ()=> import('./Game.vue'),
        },
        data() {
            return {
            }
        },
        methods: {
        }
    }
</script>