<template>
  <div class="landing-page">
    <MHeader />
    <div id="hero">
      <MHero />
    </div>
    <div id="products">
      <OProducts />
    </div>
    <div id="about">
      <MAbout />
    </div>
    <MFooter />
  </div>
</template>

  
  <script>
  import MHeader from '../../../molecules/marketplace/home/MHeader.vue';
  import MAbout from '../../../molecules/marketplace/home/MAbout.vue';
  import MHero from '../../../molecules/marketplace/home/MHero.vue';
  import MFooter from '../../../molecules/marketplace/home/MFooter.vue';
  import OProducts from '../../../organics/marketplace/post/OProducts.vue';
  
  export default {
    components: {
      MHeader,
      MHero,
      OProducts,
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
    top: 0;
  `left: 0;
  }
  .content {
    flex: 1;
  }

  html {
    scroll-behavior: smooth;
  }

  </style>
  