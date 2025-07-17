<template>
    <div class="page-add-listing">
      <MAddListing
        :typeOptions="typeOptions"
        :cropOptions="cropOptions"
        :countryOptions="countryOptions"
        :currencyOptions="currencyOptions"
        @create="handleCreate"
      />
    </div>
  </template>
  
  <script>
  import MAddListing from "../molecules/MAddListing.vue"; // adapte le chemin selon ton projet
  
  export default {
    name: "PAddListing",
    components: {
      MAddListing,
    },
    data() {
      return {
        typeOptions: ["SELLING", "BUYING"],
        cropOptions: ["Vanilla", "Cocoa", "Clove", "Coffee"],
        countryOptions: ["Madagascar", "Ghana", "Ivory Coast", "Ethiopia"],
        currencyOptions: ["MGA", "USD", "EUR"],
      };
    },
    methods: {
      handleCreate(newListing) {
        console.log("New Listing Submitted:", newListing);
        // 🔄 Tu peux rediriger ou enregistrer via API ici
        // this.$router.push('/profil/listing/view');
      },
    },
  };
  </script>
  
  <style scoped>
  .page-add-listing {
    max-width: 1000px;
    margin: 0 auto;
    /* padding: 30px 20px; */
    font-family: 'Poppins', sans-serif;
  }
  
  .page-add-listing h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #2dcc70;
  }
  </style>
  