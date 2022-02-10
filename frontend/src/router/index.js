import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "Main",
    meta:{isRequireLogin: true},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
  },
  {
    path: "/intro",
    name: "Intro",
    meta:{isRequireLogin: false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Intro.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    meta:{isRequireLogin: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecordDetail.vue"),
  },
  {
    path: "/write",
    name: "Write",
    meta:{isRequireLogin: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RecordWrite.vue"),
  },
  {
    path: "/calendar",
    name: "Calendar",
    meta:{isRequireLogin: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calendar.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    meta:{isRequireLogin: true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyPage.vue"),
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
