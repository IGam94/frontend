import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
import Editor from 'vue-editor-js/src/index' 
import Meta from 'vue-meta'
Vue.use(Meta, {
  attribute: 'data-vue-meta'
  // vmid를 사용하기 위한 옵션
});

Vue.use(VueMaterial)
Vue.config.productionTip = false;
Vue.use(Editor)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
