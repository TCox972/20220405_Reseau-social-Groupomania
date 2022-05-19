<template>
  <div class="mainmur">
    <ToolbarComp></ToolbarComp>
    <MurComp></MurComp>
    <FooterComp class="footer"></FooterComp>
  </div>
</template>

<script>
  import MurComp from '../components/Mur'
  import ToolbarComp from '../components/Toolbar'
  import FooterComp from '../components/Footer'


  export default {
    name: 'MurView',

    components: {
    MurComp,
    ToolbarComp,
    FooterComp
},
  }
</script>

<style scoped>

.mainmur{
  background-color: #F5F5F5;
  height: 100%;
}
.footer{
  bottom: 0;
  width: 100%;
}

</style>>