import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // component: Home
            /*路由懒加载 ES */
            // component: () => import('@/components/Home')
            /*异步组件 */
            redirect: './login',
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/login',
            // component: Home
            /*路由懒加载 ES */
            // component: () => import('@/components/Home')
            /*异步组件 */
            name: 'Login',
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/home',
            // component: Home
            /*路由懒加载 ES */
            // component: () => import('@/components/Home')
            /*异步组件 */

            component: resolve => require(['@/components/Home'], resolve)
        }
    ],
    mode: 'history'
})