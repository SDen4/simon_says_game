<template>
    <div class="rules__container">
        <div class="rules__window">
            <div class="rules__wrapper">
                <h2 class="rules__title">Правила игры</h2>
                <div class="rules__text">
                    <ul class="rules__list">
                        <li class="rules__list_item">
                            Игровое поле состоит из 4 сегментов, каждый из которых производит свой уникальный тон и «загорается» при нажатии.
                        </li>
                        <li class="rules__list_item">
                            Раунд в игре состоит из хода компьютера. После чего игрок должен воспроизвести его порядок, нажимая кнопки.
                        </li>
                        <li class="rules__list_item">
                            Если игрок успешно воспроизводит последовательность, он переходит к следующему раунду.
                        </li>
                        <li class="rules__list_item">
                            Если игрок не воспроизводит последовательность, то игра окончена. В уведомлении отображается, в каком раунде игрок проиграл.
                        </li>
                        <li class="rules__list_item">
                            С каждым раундом количество кнопок (последовательность) увеличивается на один.
                        </li>
                    </ul>
                    <h2 class="rules__title">
                        В игре существует три уровня сложности:
                    </h2>
                    <ul class="rules__list">
                        <li class="rules__list_item">
                            Легкий
                        </li>
                        <li class="rules__list_item">
                            Средний
                        </li>
                        <li class="rules__list_item">
                            Сложный
                        </li>
                    </ul>
                    <div class="rules__text_info">
                        Уровни отличаются между собой временным промежутком между последовательностью сигналов компьютера
                    </div>
                    <a class="link" href="https://en.wikipedia.org/wiki/Simon_(game)">Дополнительная информация об игре.</a>
                </div>
                <div class="rules__buttons_wrapper">
                    <button class="button" @click="closeRules">Назад</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closeRules() {
                this.$emit("closeRules");
            }
        }
    }
</script>