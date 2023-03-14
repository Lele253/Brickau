import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    }, {
        path: '/impressum',
        name: 'impressum',
        component: ImpressumView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
