<template>
  <div id="component">

    <h2 id="maple-h2">枫与风之歌</h2>
    <img id="maple" src="../assets/maple-story.png" alt="">

  </div>
</template>

<style>
  #maple-h2 {
    color: #c1170c;
  }
  #maple {
    width: 600px;
  }
</style>

<script>
  export default {
    name: 'Maple',
    data () {
      return {
        msg: '枫与风之歌'
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // do something after the component is rendered
      })
    }
  }
</script>