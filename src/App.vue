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
  box-sizing: inherit;
}
.app-layout {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  top: 0;
  left: 0;
}
.content {
  flex: 1;
}
</style>
