<template>
  <div class="main">
    <ToolbarComp></ToolbarComp>
    <MurComp></MurComp>
  </div>
</template>

<script>
  import MurComp from '../components/Mur'
  import ToolbarComp from '../components/Toolbar'


  export default {
    name: 'MurView',

    components: {
    MurComp,
    ToolbarComp
},
  }
</script>

<style scoped>

.main{
  background-color: #F5F5F5;
}

</style>>