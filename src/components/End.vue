<template>
    <div class="end__wrapper">
        <div class="end__window">
            <h3 class="end__title">Вы проиграли</h3>
            <div class="end__text">в {{arrayOfAi.length}} раунде</div>
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
            arrayOfAi: Array
        },
        data() {
            return {
            }
        },
        methods: {
            handleBack() {
                this.$emit('returnToStart');
            }
        }
    }
</script>