<template>
  <div class="card-modal">
    <div class="modal-container">
     <div class="card">
      <!-- <div class="card-img-top"> -->
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(image,index) in imageList" :key="`${index}-${image.id}`">
              <!-- <ImageSection :item="image" /> -->
              <img :src="require('../../assets/'+ image.image)">   
            </div>
          </div>
        </div>
      <!-- </div> -->
        <div class="card-body">
            <h5 class="card-title">{{ itemList.title }}</h5>
            <p class="card-text">{{ itemList.discription }}</p>
            <a :href="itemList.link" class="btn btn-info fade-in" target="_blank">View Site <i class="fas fa-paper-plane" aria-hidden="true" /></a>
        </div>
     </div>
    </div>
   
  </div>
</template>
<script>
import ImageSection from './ImageSection.vue';
export default {
    name: 'CardModal',
    components: {
        Image
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
        width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
    }
 }

</style>