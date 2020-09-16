import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Overview from "@/components/OverView/Overview.vue";
import projects from "@/components/OverView/projects.vue";
import contact from "@/components/contact/contact.vue";

Vue.use(Router);

export default new Router({
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
    }
  ]
});
