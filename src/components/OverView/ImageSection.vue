<template>  
  <div>
    <img :src="image">    
  </div>
</template>
<script>
export default { 
    name: 'ImageSection',
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    data(){
        return {
            image: require('../../assets/'+ this.item.image)
        };
    }
};
</script>
<style scoped lang="scss">
</style>