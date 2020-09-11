import "./styles/sass/main.sass";
import Vuelidate from 'vuelidate';

window.Vue = require("vue");

Vue.use(Vuelidate);

Vue.component("main-component", require("./components/Main.vue").default)

const app = new Vue({
    el: "#app"
});