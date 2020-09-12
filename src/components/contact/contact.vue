<template>
  <div class="contact">
    
    <h1>OK, Let's create something great</h1>

    <button class="btn btn-info fade-in"><i class="fas fa-paper-plane" aria-hidden="true" />
      <a href="mailto:dande.vasanthi@gmail.com">GET IN TOUCH</a>
    </button>
         
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
    components: {
     VueEditor
    },
    name: 'Contact',
    data() {
      return {
          content: 'Type Here...'
      };
    }    
};
</script>
<style scoped lang="scss">
.contact {
  text-align: center;
  margin-top: 20rem;
    h1{
      padding-right: 5px;
    }
    button{
      a{
        color: #fff;
        text-decoration: none;
        padding-left: 5px;
      }
    }

}

</style>