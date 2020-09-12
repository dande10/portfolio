<template>
  <div class="card-modal">      
    <div class="modal-container container">        
      <div class="card"> 
        <div class="close" @click="$emit('close')">x</div>        
        <div id="demo" class="carousel slide" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" v-if="imageList[0].image" data-slide-to="0" class="active" />
            <li data-target="#demo" v-else-if="imageList[1].image" data-slide-to="1" />
            <li data-target="#demo" v-else-if="imageList[2].image" data-slide-to="2" />
          </ul>
          <div class="carousel-inner">
            <div class="carousel-item active" v-if="imageList[0].image">
              <img class="w-100" :src="require('../../assets/'+ imageList[0].image)">
            </div>
            <div class="carousel-item" v-else-if="imageList[1].image">
              <img class="w-100" :src="require('../../assets/'+ imageList[1].image)">
            </div>
            <div class="carousel-item" v-else-if="imageList[2].image">
              <img class="w-100" :src="require('../../assets/'+ imageList[2].image)">
            </div>
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon" />
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon" />
          </a>
        </div>            
        <div class="card-body">
          <h3 class="card-title">{{ itemList.title }}</h3>
          <p class="card-text">{{ itemList.discription }}</p>
          <a :href="itemList.link" class="btn btn-info fade-in" target="_blank">View Site <i class="fas fa-paper-plane" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'CardModal',
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