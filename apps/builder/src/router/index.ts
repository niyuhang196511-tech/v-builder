import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/app',
        },
        {
            path: '/app',
            name: 'app',
            component: () => import('@/views/AppView.vue'),
            redirect: { path: '/app/dataSource' },
            children: [
                {
                    path: 'dataSource',
                    name: 'dataSource',
                    component: () => import('@/views/DataSourceView.vue'),
                },
                {
                    path: 'layout',
                    name: 'layout',
                    component: () => import('@/views/LayoutView.vue'),
                },
                {
                    path: 'actions',
                    name: 'actions',
                    component: () => import('@/views/ActionsView.vue'),
                },
            ],
        },
    ],
})

export default router
