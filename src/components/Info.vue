<template>
    <div class="info">
        <div class="info__wrapper">
            <div class="info__rounds">Раунд: {{arrayOfAi.length == 0 ? "" : arrayOfAi.length}}</div>
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
                rounds: 1
            }
        },
        methods: {

        }
    }
</script>