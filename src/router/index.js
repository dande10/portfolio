import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Overview from "@/components/OverView/Overview.vue";
import projects from "@/components/OverView/projects.vue";
import contact from "@/components/contact/contact.vue";
import NotFoundPage from "@/components/NotFoundPage.vue";

Vue.use(Router);

var router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "overview",
      component: Overview
    },
    {
      path: "/projects",
      name: "projects",
      component: projects
    },
    {
      path: "/contact",
      name: "contact",
      component: contact
    },
    {
      path: "*",
      component: NotFoundPage
    }
  ]
});
export default router;

router.beforeEach((to, from, next) => {
  if (to.fullPath.substr(0, 2) === "/#") {
    const path = to.fullPath.substr(2);
    next(path);
    return;
  }
  next();
});
