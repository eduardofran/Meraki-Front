<template>
  <div>
<h4 @click="goBack" class= "mt-10 pointer">
   &lt; Volver atrás
</h4>
  </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      window.history.back()
    }

  }
}
</script>

<style lang="scss" scoped>
.pointer{
cursor: pointer;
width: 110px;
font-family: Quicksand, sans-serif;
}
</style>
