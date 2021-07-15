import Vue from "vue";
import Router from "vue-router";
import helloWorld from "./components/katya/helloWorld";
import about from "./views/about"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/kate",
      name: "kate",
      component: helloWorld
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: about
    }
  ]
});
