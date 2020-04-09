import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('@/pages/Home').default,
        },
        {
            path: '/script',
            name: 'script',
            component: require('@/pages/Script').default,
        },
        {
            path: '/template',
            name: 'template',
            component: require('@/pages/Template').default,
        },
        {
            path: '/layer',
            name: 'layer',
            component: require('@/pages/Layer').default,
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
})