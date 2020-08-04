<template>
<div class="home-page">
  <div>
    <h2>{{ $t('message') }}<span class="name">{{ $t('name') }}.</span></h2>
    <h2>{{ $t('role') }}</h2>
  </div>
  <div>
    <router-link to="/about">
    <button class="btn btn-info fade-in">
      {{ $t('button.text') }}&nbsp;<i class="fas fa-arrow-right"></i>
    </button>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: white;
  .name {
     color: #e31b6d;
  }
}
</style>
