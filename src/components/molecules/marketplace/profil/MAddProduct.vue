<template>
    <div class="add-product-container">
      <h2 class="title">Ajouter un produit</h2>
  
      <div class="form-group">
        <label for="productName">Nom du produit</label>
        <input
          type="text"
          id="productName"
          v-model="productName"
          placeholder="Entrez le nom du produit"
          class="input-field"
        />
      </div>
  
      <AButton
        backgroundColor="#2DCC70"
        value="Ajouter"
        width="150"
        height="40"
        borderRadius="6px"
        borderWidth="0px"
        textColor="#fefefe"
        iconUrl="/icon SVG/cart.svg"
        fontFamily="Poppins"
        class="popup-button"
        @click="submitProduct"
      />
    </div>
  </template>
  
  <script>
  import AButton from '../../../atomes/AButton.vue';
  
  export default {
    components: {
      AButton,
    },
    data() {
      return {
        productName: '',
      };
    },
    methods: {
      submitProduct() {
        if (this.productName.trim() === '') {
          alert('Veuillez entrer un nom de produit.');
          return;
        }
  
        // Traitement à faire (ex: API, console, etc.)
        console.log('Produit ajouté :', this.productName);
  
        // Réinitialiser le champ
        this.productName = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .add-product-container {
    max-width: 500px;
    margin: auto;
    padding: 30px;
    border-radius: 8px;
    background-color: #f9f9f9;
    font-family: 'Poppins', sans-serif;
  }
  
  .title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: 500;
    display: block;
    margin-bottom: 8px;
    color: #333;
  }
  
  .input-field {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
  }
  </style>
  