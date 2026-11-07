import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"; 

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Home
        },
        {
            path: '/explorador',
            name: 'explorador',
            component: Home
        },
        {
            // ERROR 404
            path: '/:catchAll(.*)',
            name: 'error404',
            component: Home
        }
    ],
});

export default router;