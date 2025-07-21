<template>
  <div class="annonce">
    <h3>Aperçu de l'annonce</h3>
    <div class="card">
      <img :src="imageUrl" alt="Image d'annonce" />
      <h4>{{ productName }}</h4>
      <p class="price">{{ price }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageUrl: { type: String, default: "/images/corn.jpeg" },
  productName: { type: String, default: "Corn" },
  description: { type: String, default: "Découvrez ce produit avec des standards élevés." },
  price: { type: String, default: "200€" }
})
</script>

<style scoped>
.annonce {
  width: 25%;
  background-color: #1e2c33;
  color: white;
  padding: 1rem;
  overflow-y: auto;
}


.card img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
  height: 200px;
}

.card h4 {
  margin: 10px 0 5px;
}

.card .price {
  color: #25d366;
  font-weight: bold;
  margin-bottom: 10px;
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
  transition: background-color 0.3s;
}
.card button:hover {
  background-color: #1ebd5a;
}
</style>
