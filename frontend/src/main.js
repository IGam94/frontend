import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import Editor from 'vue-editor-js/src/index' 
import VCalendar from 'v-calendar';
import axios from 'axios'

Vue.prototype.$axios = axios
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

Vue.use(VueMaterial)
Vue.config.productionTip = false;
Vue.use(Editor)

Vue.prototype.$setSession = function(token) {
  let object = {token: token, expire: new Date()};
  sessionStorage.setItem("SESSION", btoa(JSON.stringify(object)));
};

Vue.prototype.$getSession = function() {
  if (sessionStorage.getItem("SESSION") == null) {
    return null;
  }
  try {
    console.log("123")
    let object = sessionStorage.getItem("SESSION");
      return object;
    }
   catch (error) {
      return null;
  }
}

Vue.prototype.$checkSession = function() {
  let token = Vue.prototype.$getSession();
  if (token == null) {
    return false;
  } 
  else {
    return true;
  }
};

router.beforeEach((to,from, next) => {
  if (to.meta.isRequireLogin && !Vue.prototype.$checkSession()) {
    next({ path: "/intro" });
  }else {
    next();
  }
});



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
