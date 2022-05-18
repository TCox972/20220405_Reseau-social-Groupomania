<template>
  <div class="main">
    <ToolbarComp></ToolbarComp>
    <AccountComp></AccountComp>
    <FooterComp class="footer"></FooterComp>
  </div>
</template>

<script>
  import AccountComp from '../components/Account'
  import ToolbarComp from '../components/Toolbar'
  import FooterComp from '../components/Footer'


  export default {
    name: 'MurView',

    components: {
    AccountComp,
    ToolbarComp,
    FooterComp
},
  }
</script>

<style scoped>

.main{
  background-color: #F5F5F5;
  height: 100%;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>>