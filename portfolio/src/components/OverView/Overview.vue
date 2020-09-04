<template>
  <div class="overview">
    <!-- <div class="row">
      <div class="col">
          <i class="mdi mdi-cellphone-link"></i> 
      </div>
      <div class="col">
      </div>
      <div class="col">
      </div>
      <div class="col">
      </div>
    </div> -->
    <div class="container">
      <div class="overview__about-title">
      {{ $t('overView.title') }}
    </div>
     <div class="row mobile-row">
        <div class="col" style="display: flex;">
           <span class="overview__about--text">
               My name is Vasanthi Dande, and I am a Front end developer for Snap IT solutions INC in Houston, TX. 
        I do illustration, graphic design, animation, and front-end development. 
        I have experience in various domains like commercial, banking, airline and,
         especially in the industrial industry. If you have any question about design/develop service, 
         or just want to say hello, feel free to contact me. You can email me at <span class="overview__about--text--email">dande.vasanthi@gmail.com</span>,
          or follow me at  <a href="https://www.linkedin.com/in/vasanthi-dande-b2610015a/" target="_blank">linkedIn</a>
             </span> 
        </div> 
        <div class="col">
          <ProgressBar /> 
        </div>           
     </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from '../ProgressBar'
export default {
    name: 'overview',
    components: {
      ProgressBar
    }
}
</script>
<style scoped lang="scss">
.overview {
  @media screen and (max-width: 1040px) {
    .mobile-row {
      display: inline;
    }
  }
  &__about-title {
    font-size: 20px;
    padding: 20px;
    font-weight: 600;
    text-align: center;
  }
  &__about--text {
      margin-top: 70px;
      text-align: left;
      &--email {
        color : blue;
      }
    }
  

}

</style>