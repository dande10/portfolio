<template>
  <div class="overview">
    <div class="container">
      <div class="overview__about-title">
        {{ $t('overView.title') }}
      </div>
      <div class="row mobile-row">
        <div class="col" style="display: flex;">
          <span class="overview__about--text">
            <i18n tag="span" path="overView.info.text" for="tos">
              <u>{{ $t('overView.info.email') }}</u>
              <a href="https://www.linkedin.com/in/vasanthi-dande-b2610015a/" target="_blank">{{ $t('overView.info.linkedIn') }}</a>
            </i18n>
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
import ProgressBar from '../ProgressBar';
export default {
    name: 'Overview',
    components: {
      ProgressBar
    }
};
</script>
<style scoped lang="scss">
.overview {
  @media screen and (max-width: 1040px) {
    .mobile-row {
      display: inline;
    }
  }
  &__about-title {
    font-size: 30px;
    padding: 20px;
    font-weight: 600;
    text-align: center;
  }
  &__about--text {
      margin-top: 70px;
      text-align: left;
    }
  

}

</style>