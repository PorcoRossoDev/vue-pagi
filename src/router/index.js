import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component: () => import('@/views/Main.vue') ,
    children: [
        {
            path: 'users',
            name: 'users',
            component: () => import('@/views/User.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
            path: 'users/add',
            name: 'users.add',
            component: () => import('@/views/UserEdit.vue'),
            meta: {
              requiresAuth: true
            }
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: 'module',
          name: 'module',
          component: () => import('@/views/Module.vue')
        },
        {
          path: 'module/add',
          name: 'module.add',
          component: () => import('@/views/ModuleForm.vue')
        }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, form, next)=>{
//   const token = localStorage.getItem('access_token')
//   if (token && to.name === 'login') {
//     next({ name: 'dashboard' }) 
//     return
//   }

//   if (to.meta.requiresAuth && !token) {
//     next({ name: 'login' })
//     return
//   }

//   next()
// })

export default router
