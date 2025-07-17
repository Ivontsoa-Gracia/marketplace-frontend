<template>
    <div 
      class="input-container" 
      :style="containerStyle"
    >
      <input 
        :type="secureTextEntry ? 'password' : keyboardType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :style="inputStyle"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: String, 
      placeholder: String,
      borderColor: String,
      backgroundColor: String,
      borderRadius: String,
      width: String,
      height: String,
      borderWidth: String,
      fontSize: String,
      textColor: String,
      secureTextEntry: Boolean, 
      keyboardType: String ,
      fontFamily: String
    },
    computed: {
      containerStyle() {
        return {
          borderColor: this.borderColor,
          backgroundColor: this.backgroundColor,
          borderRadius: this.borderRadius,
          width: this.width,
          height: this.height,
          borderWidth: this.borderWidth,
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderStyle: "solid",
        };
      },
      inputStyle() {
        return {
          fontSize: this.fontSize,
          color: this.textColor,
          width: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: this.fontFamily,
        };
      }
    }
  };
  </script>
  
  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  .input-container {
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
  }
  </style>
  