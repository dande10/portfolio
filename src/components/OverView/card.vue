<template>  
  <div class="card card-item" style="width: 18rem;">
    <img :src="image" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text" />
      <a href="#" class="btn btn-info fade-in">Quick Look</a>
    </div>
  </div>
</template>
<script>
export default {
    name: 'Card',
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            image: require('../../assets/'+ this.item.image)
        };
    } 
};
</script>
<style scoped lang="scss">
.card-item {
    .card-img-top {
        height: 160px;
    }
}
</style>