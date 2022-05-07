<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CompteurView />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CompteurView from '@/components/Compteur.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, CompteurView
  }
}
</script>
