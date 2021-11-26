require('./bootstrap');

// Importar vue js
import vue from 'vue';
window.Vue = vue;

// Importo el componente principal APP
import App from './components/App.vue'

// Importamos axios
import VueAxios from 'vue-axios';
import axios from 'axios';

// Importamos y configuramos el vue router
import VueRouter from 'vue-router';
import {routes} from './routes'
import Vue from 'vue';
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
const router = new VueRouter({
    mode:'history',
    routes:routes
});

// Crear una instancia de vue
const app = new Vue({
    el : '#app',
    router:router,
    render: h => h(App)
});

