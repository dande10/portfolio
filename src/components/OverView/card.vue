<template>  
  <div class="card card-item" style="width: 18rem;">
    <img :src="image" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ item.title }}</h5>
      <p class="card-text" />
      <a href="#" class="btn btn-info fade-in" @click="openModal">Quick Look</a>
    </div>
    <card-modal v-if="modalShow" :item-list="item.modal" />
  </div>
</template>
<script>
import cardModal from './cardModal.vue';
export default { 
    name: 'Card',
    components: {
        cardModal
    },
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            image: require('../../assets/'+ this.item.image),
            modalShow : false
        };
    },    
    methods: {
         openModal: function() {
             this.modalShow = !this.modalShow;
         }
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