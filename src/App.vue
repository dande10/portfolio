<template>
  <div id="app" class="application">
    <HeaderSection v-if="!(this.$route.path =='/')" />
    <router-view :class="{'application__components-container': !(this.$route.path =='/')}" />
    <ParticlesJS v-if="this.$route.path =='/'" />
    <FooterSection v-if="!(this.$route.path =='/')" />
  </div>
</template>

<script>
import ParticlesJS from '@/components/ParticlesJS';
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
  name: 'App',
  components: {
    ParticlesJS,
    FooterSection,
    HeaderSection
  }
};
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
  // text-align: center;
  overflow-x: hidden;
  background: #dddd;
}
.application__components-container {
   min-height: calc(100vh - 110px);
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #888;
    border: 2px solid #eee;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
</style>