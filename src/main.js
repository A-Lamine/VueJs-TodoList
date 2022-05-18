import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import router from './router'

const app = createApp(App);

const store = createStore({
    state() {

    },
    getters: {

    },
    mutations: {

    }
});

app.use(router).use(store).mount('#app')
