<template>
    <MSidebar>
      <router-view /> 
    </MSidebar>
  </template>
  
  <script>
  import MSidebar from "../molecules/MSidebar.vue";
  
  export default {
    components: {
      MSidebar,
    },
  };
  </script>
  