<template>
    <div class="footer-section">
        {{$t('footer.copyRight')}}
    </div>
</template>
<script>
export default {
    name: 'footer-section'
}
</script>
<style lang="scss" scoped>
.footer-section {
    background: #141516;
    color: white;
    height: 43px;
    bottom: 0;
    position: fixed;
    width: 100%;
}
</style>