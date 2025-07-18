<template>
    <MSidebar>
      <router-view /> 
    </MSidebar>
  </template>
  
  <script>
  import MSidebar from '../../../molecules/marketplace/profil/MSidebar.vue';
  
  export default {
    components: {
      MSidebar,
    },
  };
  </script>
  