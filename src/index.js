import "./styles/sass/main.sass";

window.Vue = require("vue");


Vue.component("main-component", require("./components/Main.vue").default)

const app = new Vue({
    el: "#app"
});