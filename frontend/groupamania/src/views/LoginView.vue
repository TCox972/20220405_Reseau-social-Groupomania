<template>
<div>
  <ToolbarLogComp></ToolbarLogComp>
  <LoginComp></LoginComp>
</div>
  
</template>

<script>
  import LoginComp from '../components/Login'
  import ToolbarLogComp from '../components/ToolbarLog.vue'

  export default {
    name: 'LoginView',

    components: {
    LoginComp,
    ToolbarLogComp,
},
  }
</script>
