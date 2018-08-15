import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexpage'
import store from "@/store"
import mint from "./mint-aside"
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: "/index"
    }, {
      path: "/index",
      name: 'IndexPage',
      component: IndexPage,
      redirect: "/index/one",
      children: mint
    }, {
      path: "/login",
      name: "Login",
      component: () => import("@/components/login")
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.name == "Login") {
    return next();
  }
  const isLogin = await new Promise((resolve, reject) => {
    if (document.cookie.indexOf("token") !== -1) {
      resolve(true)
    } else {
      resolve(false)
    }

  });
  //console.log(document.cookie.indexOf("token"))
  if (isLogin) {
    store.commit("SET_LOGIN_STATUS", true)
    next();
  } else {
    store.commit("SET_LOGIN_STATUS", false)
    next("/login")
  }
});
export default router;
