<template>
  <div>
    <ToolbarLogComp></ToolbarLogComp>
    <SignupComp></SignupComp>
  </div>
   
</template>

<script>
  import SignupComp from '../components/Signup'
  import ToolbarLogComp from '../components/ToolbarLog'

  export default {
    name: 'SignupView',

    components: {
    SignupComp,
    ToolbarLogComp,
},
  }
</script>