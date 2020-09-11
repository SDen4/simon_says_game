<template>
    <div class="main__wrapper">
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