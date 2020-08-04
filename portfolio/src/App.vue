<template>
  <div id="app" class="application">
     <HeaderSection v-if="!(this.$route.path =='/')"/>
    <router-view class="application__components-container"/>
    <ParticlesJS v-if="this.$route.path =='/'"/>
    <FooterSection v-if="!(this.$route.path =='/')"/>
  </div>
</template>

<script>
import ParticlesJS from '@/components/ParticlesJS'
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
export default {
  name: 'App',
  components: {
    ParticlesJS,
    FooterSection,
    HeaderSection
  }
}
</script>

<style lang="scss">
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
// $material-icons-font-path: '~material-icons/iconfont/';
// @import '~material-icons/iconfont/material-icons.scss';


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  overflow-x: hidden;
}
.application {
  // &__components-container {    
  //   min-height: calc(100vh - 110px);
  // }
}
</style>