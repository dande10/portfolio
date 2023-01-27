<!-- eslint-disable -->
<template>
  <div class="overview">
    <div class="container">
      <div class="overview__about-title">
        {{ $t('overView.title') }}
      </div>
      <div class="row mobile-row">
        <div class="" style="display: flex;">
          <span class="overview__about--text">
            {{ $t('overView.info.text1') }}<br />
            {{ $t('overView.info.text2') }}<br />
            <i18n tag="span" path="overView.info.text" for="tos">
              <u>{{ $t('overView.info.email') }}</u>
              <a href="https://www.linkedin.com/in/vasanthi-dande/" target="_blank">{{
                $t('overView.info.linkedIn')
              }}</a>
            </i18n><br />
            {{ $t('overView.info.text3') }}
          </span>
        </div>
        <div class="progress-section">
          <!-- <ProgressBar /> -->
          <div class="overview__about-title sub-heading">
            My Skills
          </div>
          <span class="badge badge-pill badge-primary" style="background-color: #e34c26">HTML5</span>
          <span class="badge badge-pill badge-secondary" style="background-color: #264de4">CSS3</span>
          <span class="badge badge-pill badge-success"
            style="background-color: #f0db4f; color: #323330;">Javascript</span>
          <span class="badge badge-pill badge-danger" style="background-color: #42b883; color: #35495e;">Vue JS</span>
          <span class="badge badge-pill badge-warning" style="background-color: #16c8f2; color: #293756;">React
            JS</span>
          <span class="badge badge-pill badge-info" style="background-color: #303030; color:#68a063;">Node JS</span>

          <span class="badge badge-pill badge-info" style="background-color: 	#41b883; color:#35495e;">Nuxt JS</span>
          <span class="badge badge-pill badge-info" style="background-color: 	#cb3837; ">NPM</span>
          <span class="badge badge-pill badge-info" style="background-color: 	#cb3837; ">Npx</span>
          <span class="badge badge-pill badge-info" style="background-color: 	#0769ad; ">Jquery</span>
          <span class="badge badge-pill badge-info" style="background-color: 	#007acc; ">Typescript</span>
          <span class="badge badge-pill badge-info" style="background-color: 	#fc6c5c; ">Angular JS</span>
          <span class="badge badge-pill badge-danger" style="background-color: #42b883; color: #35495e;">Vuex</span>
          <span class="badge badge-pill badge-danger"
            style="background-color: #42b883; color: #35495e;">Vue-router</span>
          <span class="badge badge-pill badge-danger" style="background-color: #42b883; color: #35495e;">Vue-cli</span>
          <span class="badge badge-pill badge-danger"
            style="background-color: #42b883; color: #35495e;">Vue2-google-maps</span>
          <span class="badge badge-pill badge-danger" style="background-color: #3c8c14;">Shopify</span>
          <span class="badge badge-pill badge-danger" style="background-color: #cc6699;">SASS</span>
          <span class="badge badge-pill badge-danger" style="background-color: #9297f3;">Tailwind CSS</span>
          <span class="badge badge-pill badge-danger" style="background-color: #5c94c4;">Alpine JS</span>
        </div>
        <div class="progress-section">
          <!-- <ProgressBar /> -->
          <div class="overview__about-title sub-heading">
            Tools
          </div>
          <span class="badge badge-pill badge-light" style="background-color: #0078d7">VS Code</span>
          <span class="badge badge-pill badge-dark" style="background-color: #f34f29; color: #fff;">Chrome Dev
            Tools</span>
          <span class="badge badge-pill badge-dark" style="background-color: #f34f29; color: #fff;">Git</span>
        </div>
        <div class="progress-section">
          <!-- <ProgressBar /> -->
          <div class="overview__about-title sub-heading">
            Blog
          </div>
          Coming soon...
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
  padding-bottom: 50px;

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
    margin-top: 10px;
    text-align: left;


    text-align: justify;

    @media screen and (max-width: 768px) {
      margin-top: 0;
    }
  }

  .progress-section {
    width: 100%;
  }

  .sub-heading {
    text-align: left;
    padding-left: 0;
    font-size: 20px;
  }
}
</style>