<template>
  <div id="component">

    <h2 id="sky-h2">It’s my own Invention...</h2>
    <img id="sky" src="../assets/Black-heaven-suu.png" alt="">

  </div>
</template>

<style>
  #sky-h2 {
    color: #7bcbec;
  }
  #sky {
    width: 400px;
  }
</style>

<script>
  export default {
    name: 'Sky',
    data () {
      return {
        msg: 'It’s my own Invention...'
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // do something after the component is rendered
      })
    }
  }
</script>