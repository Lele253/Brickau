import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImpressumView from "@/views/ImpressumView";
import FileExplorerView from "@/views/FileExplorerView";
import TestView from "@/views/testView";
import UploadView from "@/views/UploadView";
import DateiManager from "@/views/DateiManager";

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
        path: '/upload',
        name: 'upload',
        component: UploadView
    },
    {
        path: '/manager',
        name: 'manager',
        component: DateiManager
    },
    {
        path: '/files',
        name: 'files',
        component: FileExplorerView
    },
    {
        path: '/test',
        name: 'test',
        component: TestView
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
