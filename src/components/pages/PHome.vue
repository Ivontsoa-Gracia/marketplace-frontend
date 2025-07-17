<template>
  <div class="landing-page">
    <MHeader />
    <div id="hero">
      <MHero />
    </div>
    <div id="products">
      <MProducts />
    </div>
    <div id="about">
      <MAbout />
    </div>
    <MFooter />
  </div>
</template>

  
  <script>
  import MHeader from "../molecules/MHeader.vue";
  import MHero from "../molecules/MHero.vue"; 
  import MProducts from "../molecules/MProducts.vue";
  import MAbout from "../molecules/MAbout.vue";
  import MFooter from "../molecules/MFooter.vue";
  
  export default {
    components: {
      MHeader,
      MHero,
      MProducts,
      MAbout,
      MFooter,
    }
  }
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
  }
  .content {
    flex: 1;
  }

  html {
    scroll-behavior: smooth;
  }

  </style>
  