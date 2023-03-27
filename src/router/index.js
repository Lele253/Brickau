import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView";
import VerwaltungView from "@/views/VerwaltungView";
import FilesView from "@/views/FilesView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,

    },
    {
        path: '/impressum',
        name: 'impressum',
        component: ImpressumView
    },
    {
        path: '/Files',
        name: 'files',
        component: FilesView
    },
    {
        path: '/verwaltung',
        name: 'verwaltung',
        component: VerwaltungView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return {el: document.getElementById('home'), behavior: 'smooth'}
        }
    }
})

export default router
