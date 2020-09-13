<template>
    <div class="info">
        <div class="info__wrapper">
            <h3 class="info__rounds">Раунд: {{round === 0 ? "" : round}}</h3>
            <h3 class="info__levels_title">Уровни:</h3>
            <form
                class="info__form"
                :class="{info__blockChoseLevel: blockChoseLevel}"
                @change="handleChoose"
            >
                <label class="info__label">
                    <div class="info__subtitle">легкий</div>
                    <input 
                        class="info__input"
                        type="radio"
                        value="easy"
                        v-model="level"
                    >
                </label>
                <label class="info__label">
                    <div class="info__subtitle">средний</div>
                    <input 
                        class="info__input"
                        type="radio"
                        value="middle"
                        v-model="level"
                    >
                </label>
                <label class="info__label">
                    <div class="info__subtitle">сложный</div>
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
            round: Number,
            blockChoseLevel: Boolean
        },
        data() {
            return {
                level: "easy"
            }
        },
        methods: {
            handleChoose() {
                this.$emit('returnLevel', this.level);
            }
        }
    }
</script>