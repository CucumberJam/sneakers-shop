import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: () => import('@/views/FavoritesView.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfileView.vue'),
            children: [
                {
                    path: '/signup',
                    name: 'signup',
                    component: ()=> import('@/views/SignUpView.vue')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: ()=> import('@/views/LoginView.vue')
                },
                {
                    path: '/resetpass',
                    name: 'resetpass',
                    component: () => import("@/views/ForgotPasswordView.vue")
                },
                {
                    path: '/orders',
                    name: 'orders',
                    component: ()=> import('@/views/OrdersView.vue')
                },
            ]
        },
    ]

});
export default router