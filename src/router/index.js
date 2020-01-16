import Vue from 'vue'
import VueRouter from 'vue-router'
import NormalImage from "@/views/NormalImage"
import SpecImage from "@/views/SpecImage"
import Home from "@/views/Home";
import UploadFile from "@/views/UploadFile";
import SpyImage from "@/views/SpyImage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/normalImage',
        name: 'normalImage',
        component: NormalImage
    },
    {
        path: '/specImage',
        name: 'specImage',
        component: SpecImage
    },
    {
        path: '/uploadFile',
        name: 'uploadFile',
        component: UploadFile
    },
    {
        path: '/spyImage',
        name: 'spyImage',
        component: SpyImage
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
