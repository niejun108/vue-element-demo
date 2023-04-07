import { createRouter, createMemoryHistory, createWebHashHistory } from "vue-router";

const routes = [{
    path:"/",redirect:"/home/index"
},{
    path:"/login",
    name:"login",
    component:()=>import('@/views/Login.vue')
},{
    //layout>>>>
    component:()=>import('@/layout/Layout.vue'),
    children:[{
        path:'/home/index',
        name:'home-index',
        component:()=>import('@/views/home/Index.vue')
    },{
        path:'/product/list',
        name:'product-list',
        component:()=>import('@/views/product/List.vue')
    },{
        path:'/product/detail',
        name:'product-detail',
        component:()=>import('@/views/product/Detail.vue')
    },{
        path:'/user/list',
        name:'user-list',
        component:()=>import('@/views/user/List.vue')
    },{
        path:'/user/detail',
        name:'user-detail',
        component:()=>import('@/views/user/Detail.vue')
    }]
    //<<<<<layout
},]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
})

export default router