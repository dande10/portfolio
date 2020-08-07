<template>
  <div class="contact">
    <div class="container">
      <div class="contact__about-title">
      {{ $t('contact.title') }}
    </div>
     <div class=" mobile-row">
       <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form> 
     </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from '../ProgressBar'
export default {
    name: 'contact',
    components: {
      ProgressBar
    }
}
</script>
<style scoped lang="scss">
.contact {
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
    }
  

}

</style>