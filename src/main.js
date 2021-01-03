import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button,Layout,Icon,Drawer,Radio,Menu } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Menu);
Vue.use(Radio);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
