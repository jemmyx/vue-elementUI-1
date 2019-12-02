import "core-js";
import Vue from "vue";
import ElementUI from "element-ui";
import VueRouter from "vue-router";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

import Terms from "./components/Terms";
import Dashboard from "./components/Dashboard";
import BlockGame from "./components/BlockGame";
import Profile from "./components/Profile";

Vue.use(ElementUI);
Vue.use(VueRouter);

const routes = [
  { path: "/terms", component: Terms },
  { path: "/game", component: BlockGame },
  { path: "/profile", component: Profile },
  { path: "/", component: Dashboard },
  { path: "*", component: Dashboard },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
