import { createRouter, createWebHistory } from 'vue-router'
import Master from '../views/Master.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  duplicateNavigationPolicy: 'reload',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Master,
      meta: {
        title:'Home'
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title:'About us'
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Service.vue'),
      meta: {
        title:'Our Services'
      },
    },
    
    {
      path: '/gallery/photo',
      name: 'Photo',
      component: () => import('../views/Photo.vue'),
      meta: {
        title:'Our photos'
      },
    },
    {
      path: '/gallery/videos',
      name: 'Video',
      component: () => import('../views/Video.vue'),
      meta: {
        title:'Our videos'
      },
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/Project.vue'),
      meta: {
        title:'Our Projects'
      },
    },

    {
      path: '/project/:slug/:id',
      name: 'projectone',
      component: () => import('../views/ProjectDetail.vue'),
      meta: {
        title:'Our Projects'
      },
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: {
        title:'Contact us'
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      meta: {
        title:'Our news'
      },
    },
    {
      path: '/blog/:slug/:id',
      name: 'blogone',
      component: () => import('../views/BlogDetail.vue'),
      meta: {
        title:'Our news'
      },
    },
    {
      path: '/service/:slug/:id',
      name: 'serviceone',
      component: () => import('../views/ServiceDetail.vue'),
      meta: {
        title:'Our services'
      },
    },
    {
      path: '/blog/category/:id',
      name: 'blogCat',
      component: () => import('../views/BlogCat.vue'),
      meta: {
        title:'Our news'
      },
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/Team.vue'),
      meta: {
        title:'Our Team'
      },
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue'),
      meta: {
        title:'Error'
      },
    },


    {
      // path: "*",
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('../views/Error.vue'),
      meta: {
        title:'Not found'
      },
   }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})



export default router
