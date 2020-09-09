<template>
  <div class="contact">
    <form>
      <div>
        <label>Name</label>
        <input type="text">
      </div>
      <div>
        <label>Email</label>
        <input type="email">
      </div>
      <div>
        <label>Message</label>
        <vue-editor v-model="content" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
         
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
.projects {
    text-align: left;
    padding: 10px;
    margin: 10px;
    box-shadow: 5px 10px 18px #ccc
}

</style>