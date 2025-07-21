<template>
  <div class="app-layout">
    <router-view /> <!-- ici s'affiche la page correspondant à la route -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-layout {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  font-family: 'Poppins', sans-serif;
}
.content {
  flex: 1;
}
</style>
