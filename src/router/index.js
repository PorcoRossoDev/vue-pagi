import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component: () => import('@/views/Main.vue') ,
    children: [
        {
            path: 'users',
            name: 'users',
            component: () => import('@/views/User.vue')
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        }
    ]
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
