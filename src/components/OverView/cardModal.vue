<template>
  <div class="card-modal">
      
    <div class="modal-container container">
        
      <div class="card"> 
        <div class="close" @click="$emit('close')">x</div>           
        <VueSlickCarousel :arrows="true" :dots="true">
          <div v-for="(image,index) in imageList" :key="`${index}-${image.id}`">
            <img class="w-100" :src="require('../../assets/'+ image.image)">
          </div>
        </VueSlickCarousel>
            
        <div class="card-body">
          <h3 class="card-title">{{ itemList.title }}</h3>
          <p class="card-text">{{ itemList.discription }}</p>
          <a :href="itemList.link" class="btn btn-info fade-in" target="_blank">View Site <i class="fas fa-paper-plane" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </div>
   
  <!-- </div> -->
</template>
<script>
import ImageSection from './ImageSection.vue';
import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
    name: 'CardModal',
    components: {
        ImageSection,
        VueSlickCarousel

    },
    props: {
        itemList: {
            type: Object,
            default: null
        }
    },
    computed: {
        imageList(){
            return this.itemList.images;
        }
    },
    methods:{
        image: function(image) {
            return require('../../assets/'+ image.image);
        }
    }
};
</script>
<style scoped lang="scss">
 .card-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    .modal-container{
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        top: 50%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;

        .close{
            text-align: right;
            cursor: pointer;
        }
        .card {
            max-height: calc(100vh - 100px);
            overflow-y: auto;
            border: none;
        }
    }
 }

</style>