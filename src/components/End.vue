<template>
    <div class="end__wrapper">
        <div class="end__window">
            <h3 class="end__title">Вы проиграли</h3>
            <div class="end__text">в {{round}} раунде</div>
            <div class="end__buttons_wrapper">
                <button 
                    class="button"
                    @click="handleBack"
                >Сыграть еще раз</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            round: Number
        },
        methods: {
            handleBack() {
                this.$emit('returnToStart');
            }
        }
    }
</script>