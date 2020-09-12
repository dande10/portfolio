// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import i18n from "./i18n";
import "bootstrap";
import VueSlickCarousel from "vue-slick-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.use(VueSlickCarousel);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  i18n,
  template: "<App/>"
});
