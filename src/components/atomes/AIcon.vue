<template>
    <div class="icon-container">
      <button 
        class="icon-button"
        :style="buttonStyle"
        @click="onClick"
      >
        <img 
          :src="imageSrc" 
          :style="imageStyle"
          alt="Icon"
        />
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      url: String, 
      width: String,
      height: String,
      borderColor: String,
      backgroundColor: String,
      borderRadius: String,
      borderRadiusIcon: String,
      widthback: String, 
      heightBack: String,
      borderWidth: String,
      color: String,
    },
    computed: {
      imageSrc() {
        return this.url; 
      },
      buttonStyle() {
        return {
          borderColor: this.borderColor,
          backgroundColor: this.backgroundColor,
          borderRadius: this.borderRadius,
          width: this.widthback,
          height: this.heightBack,
          borderWidth: this.borderWidth,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px",
          borderStyle: "solid",
          cursor: "pointer",
          color: this.color,
        };
      },
      imageStyle() {
        return {
          width: this.width,
          height: this.height,
          borderRadius: this.borderRadiusIcon,
          objectFit: "cover"
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .icon-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .icon-button:hover {
    opacity: 0.8;
  }
  </style>
  