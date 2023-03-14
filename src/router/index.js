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
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {el: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    }
})

export default router
