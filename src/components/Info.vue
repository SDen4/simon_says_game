<template>
    <div class="info">
        <div class="info__wrapper">
            <h3 class="info__rounds">Раунд: {{arrayOfAi.length == 0 ? "" : arrayOfAi.length}}</h3>
            <h3 class="info__levels_title">Уровни:</h3>
            <form class="info__form" @change="handleChoose">
                <label class="info__label">
                    <div class="info__subtitle">Легкий</div>
                    <input 
                        class="info__input"
                        type="radio"
                        value="easy"
                        v-model="level"
                    >
                </label>
                <label class="info__label">
                    <div class="info__subtitle">Средний</div>
                    <input 
                        class="info__input"
                        type="radio"
                        value="middle"
                        v-model="level"
                    >
                </label>
                <label class="info__label">
                    <div class="info__subtitle">Сложный</div>
                    <input 
                        class="info__input"
                        type="radio"
                        value="hard"
                        v-model="level"
                    >
                </label>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            arrayOfAi: Array
        },
        data() {
            return {
                level: "easy"
            }
        },
        methods: {
            handleChoose(e) {
                console.log(this.level);
            }
        }
    }
</script>