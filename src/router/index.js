import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TapBar from '../components/TapBar.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/Login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [

            {
                path: '/',
                name: 'HomeShow',
                component: () =>
                    import ('../views/HomeShow.vue')
            },
            {
                path: '/usermanager',
                name: 'UserManager',
                component: () =>
                    import ('../views/UserManager.vue')
            },
            {
                path: '/setting',
                name: 'Setting',
                component: () =>
                    import ('../views/Setting.vue')
            },
            {
                path: '/homeshow',
                name: 'HomeShow',
                component: () =>
                    import ('../views/HomeShow.vue')
            }
        ]
    },
    {
        path: '/tapbar',
        name: 'TapBar',
        component: TapBar
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('token');

        if (token === null || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});
export default router