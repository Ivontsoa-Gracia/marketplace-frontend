<template>
    <div class="search-wrapper">
      <div class="search-box">
        <img src="/icon SVG/search.svg" alt="Search" class="search-icon" />
        <AInput
            type="text"
            class="search-input"
            placeholder="Search products, crops..."
            borderRadius="35px"
            borderWidth="0px"
            backgroundColor="#EFEFEF"
            width="100%"
            height="25px"
            fontFamily="Poppins"
        />
      </div>
    </div>
  
    <div class="hero-container">
      <div class="hero-overlay"></div>
  
      <div class="hero-content">
        <div class="hero-left">
          <AText
            contenu="Connect with Global Agricultural Markets"
            fontSize="48px"
            textColor="#fefefe"
            fontWeight="600"
            fontFamily="Poppins"
            textAlign="left"
            padding="5px 0"
            with="auto"
            borderRadius="4px"
          />
          <AText
            contenu="Buy and sell spices, crops, and products directly with farmers, cooperatives, businesses around the world"
            fontSize="18px"
            textColor="#fefe"
            fontWeight="light"
            fontFamily="Poppins"
            textAlign="left"
            padding="5px 0 20px 0"
            with="auto"
            borderRadius="4px"
          />
  
          <div class="hero-buttons">
            <AButton 
                value="START TRADING"
                backgroundColor="ffffff"
                borderRadius="4px"
                borderWidth="0px"
                textColor="#212121"
                width="200px"
                fontWeight="medium"
                fontFamily="Poppins"
            />
            <AButton 
                value="LEARN MORE"
                backgroundColor="transparent"
                borderColor="#ffffff"
                borderRadius="4px"
                borderWidth="2px"
                textColor="#ffffff"
                width="200px"
                fontWeight="400"
                fontFamily="Poppins"
            />
          </div>
        </div>
  
        <div class="hero-right">
          <img src="/images/image-hero.png" alt="Hero image" />
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import AButton from '../../../atomes/AButton.vue';
  import AText from '../../../atomes/AText.vue';
  import AInput from '../../../atomes/AInput.vue';
  
  export default {
    components: {
      AText,
      AButton,
      AInput
    }
  };
  </script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  padding: 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: 100vw;
  padding-top: 80px;
  font-family: 'Poppins', sans-serif;
}

.search-box {
  background-color: #efefef;
  width: 80%;
  border-radius: 35px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 40px;
  height: 45px;
}

.search-icon {
  position: absolute;
  left: 15px;
  width: 18px;
  height: 18px;
}

.search-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  color: #212121;
  font-family: 'Poppins', sans-serif;

}

/* Hero section */
.hero-container {
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url('./images/background-hero.jpeg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: stretch;
  padding-top: 60px;
  box-sizing: border-box;
  max-width: 100vw;
  font-family: 'Poppins', sans-serif;

}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(45, 204, 112, 0.7), rgba(22, 108, 83, 0.8));
  backdrop-filter: blur(2px);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-left {
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 55%;
  margin-top: -70px;

}

.hero-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-end;
}

.hero-right img {
  max-width: 70%;
  height: auto;
  object-fit: contain;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .hero-left,
  .hero-right {
    max-width: 100%;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-right img {
    width: 80%;
    margin-top: 20px;
  }

  .search-box {
    width: 90%;
  }
}

</style>
