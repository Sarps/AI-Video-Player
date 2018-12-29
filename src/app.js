const Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './views/App.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Profile from './views/Profile.vue'
import Home from './views/Home.vue'

const router = new VueRouter({
    //mode: 'history',
    routes: [
        { path: '/', redirect: {name: 'home'}, meta: { transition: 'slide' } },
        { path: '/home', name: 'home', component: Home, meta: { transition: 'slide' } },
        { path: '/profile', name: 'profile', component: Profile, meta: { transition: 'zoom' } },
    ],
})

new Vue({

    el: '#app',

    components: {
        App, Navbar, Sidebar
    },

    router,

    data() {
        return {
            sidebarCollapsed: false
        }
    }
});
