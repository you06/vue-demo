<template>
  <div id="component">

    <h2 id="rabbit-h2">Welcome to the rabbit house!</h2>
    <img id="rabbit" src="../assets/rabbit.png" alt="">

  </div>
</template>

<style>
  #rabbit-h2 {
    color: #ec7ba1;
  }
  #rabbit {
    width: 400px;
  }
</style>

<script>
  export default {
    name: 'Rabbit',
    data () {
      return {
        msg: 'Welcome to the rabbit house!'
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // do something after the component is rendered
      })
    }
  }
</script>