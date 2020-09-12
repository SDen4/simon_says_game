<template>
    <div class="main__wrapper">
        <h1 class="main__title">Simon The Game</h1>
        <game-component></game-component>
        <div
            class="main__author"
        >Разработано 
            <a
                class="main__author_link"
                href="https://github.com/SDen4"
                target="_blank"
            >
                Skryabin Denis
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            gameComponent: ()=> import('./Game.vue'),
        }
    }
</script>