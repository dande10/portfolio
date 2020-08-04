<template>
    <div class="row header-section__row">
        <div class="col-6 header-section__first">
            <h2>{{ $t('name') }}</h2>
         </div>
         <div class="header-section__navigation">
            <div class="col">
                <router-link to="/about"> ABOUT </router-link>
            </div>
            <div class="col">
                <router-link to='/projects'>PROJECTS</router-link>
            </div>
            <div class="col">
                <router-link to="/resume">RESUME</router-link>
            </div>
            <div class="col">
                <router-link to="/contact">CONTACT</router-link>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    name: 'header-section'
}
</script>
<style scoped lang="scss">
.header-section {
    &__row {
       padding: 10px;
       background: #141516;
       color: var(--white);
    }     
    &__first {
        text-align: left;
        color: #e31b6d;
    }
    &__navigation {
        display: flex;
        width: 50%;
        margin-top: 10px;
        a {
            text-decoration: none;
            color: var(--white);
        }
        a:hover {
            color: #e31b6d;
        }
    }
}
</style>