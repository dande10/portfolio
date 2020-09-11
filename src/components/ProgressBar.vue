<template>
  <div class="progressBar">
    <div class="progressBar__bar-skill" v-for="(skill, idx) in getSkills" :key="idx">
      <div class="progressBar__each-skill">
        <div class="progressBar__title">
          {{ skill.title }}
        </div>
        <div class="progressBar__progressValue" :style="{'width' : skill.value}" />
        <div class="progressBar__percentage">
          {{ skill.value }}
        </div>
      </div>
    </div>       
  </div>
</template>
<script>    
export default {
    name: 'ProgressBar',
    data(){
      return {
        skills: [
          {
            id: 1,
            title: 'HTML',
            value: '90%'
          },
          {
            id: 2,
            title: 'CSS3',
            value: '90%'
          },
          {
            id: 3,
            title: 'JAVASCRIPT',
            value: '80%'
          },
          {
            id: 4,
            title: 'VUE',
            value: '70%'
          },
          {
            id: 5,
            title: 'PHOTOSHOP',
            value: '60%'
          },
          {
            id: 6,
            title: 'UI DESIGN',
            value: '40%'
          },
          {
            id: 7,
            title: 'REACT',
            value: '60%'
          },
          {
            id: 8,
            title: 'ANGULAR',
            value: '50%'
          },
          {
            id: 9,
            title: 'Azure Devops',
            value: '35%'
          },
          {
            id: 10,
            title: 'wire frames',
            value: '60%'
          },
          {
            id: 11,
            title: 'Java',
            value: '30%'
          },
          {
            id: 12,
            title: 'Jenkins',
            value: '50%'
          },
          {
            id: 13,
            title: 'Node JS',
            value: '70%'
          },
          {
            id: 13,
            title: 'Jquery',
            value: '80%'
          }

        ]
      };
    },
    computed: {
        getSkills: function() {
            return this.skills;
        }
    }
};
</script>
<style scoped lang="scss">
@keyframes progressBar {
   from { width: 0; }
   to { width: auto; }
}
.progressBar {       
    width: 100%;
    position: relative;
    &__bar-skill {
        height: 35px;
        width: 100%;
        margin-bottom: 20px;
    }
    &__each-skill {
        position: relative;
        background: #dadada; 
        color: #888;
    }
    &__title { 
        color: var(--white);
        background: #a32e5ebf;            
        padding: 5px;
        position: absolute;
        height: 35px;
        width: 150px;
        font-size: 14px;
        text-transform: uppercase;
    }
    &__percentage {
        right: 0;
        top: 20%;
        position: absolute;
        padding-right: 15px;

    }
    &__progressValue {
        background: #e31b6d;
        height: 35px;
    }
}

</style>