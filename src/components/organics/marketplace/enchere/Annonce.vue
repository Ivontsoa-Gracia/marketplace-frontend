<template>
    <div class="annonce">
      <h3>Aperçu de l'annonce</h3>
      <div class="card">
        <img src="https://via.placeholder.com/250x150" alt="Image d'annonce" />
        <h4>Titre de l’annonce</h4>
        <p>Description rapide de l’annonce en question.</p>
        <button>Voir plus</button>
      </div>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .annonce {
    width: 25%;
    background-color: #1e2c33;
    color: white;
    padding: 1rem;
    overflow-y: auto;
  }
  .card {
    background-color: #2a3942;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  .card img {
    width: 100%;
    border-radius: 6px;
  }
  .card button {
    margin-top: 10px;
    padding: 10px;
    width: 100%;
    background-color: #25d366;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  