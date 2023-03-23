import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView";
import FileExplorerView from "@/views/FileExplorerView";

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
        path: '/files',
        name: 'files',
        component: FileExplorerView
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
