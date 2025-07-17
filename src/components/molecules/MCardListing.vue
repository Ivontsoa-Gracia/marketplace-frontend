<template>
  <div class="card-listing" :class="borderClass">
    <!-- Ligne -->
    <div class="card-row">
      <!-- Image -->
      <div class="td image-col">
        <img :src="imageUrl" alt="product" />
      </div>

      <!-- Nom + Description -->
      <div class="td name-desc-col">
        <h4>{{ productName }}</h4>
        <p class="description">{{ description }}</p>
      </div>

      <!-- Type de post -->
      <div class="td category-col" :class="categoryBgClass">
        {{ category === 'SELLING' ? 'Selling' : 'Buying' }}
      </div>


      <!-- Date -->
      <div class="td date-col">
        {{ date }}
      </div>

      <!-- Actions -->
      <div class="td actions-col">
        <i class="fas fa-pen edit-icon" @click="$emit('edit')" title="Modifier"></i>
        <i class="fas fa-trash delete-icon" @click="$emit('delete')" title="Supprimer"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardListing',
  props: {
    category: String,
    imageUrl: String,
    productName: String,
    region: String,
    price: String,
    description: String,
    date: String
  },
  computed: {
    borderClass() {
      return this.category === 'SELLING' ? 'border-selling' : 'border-buying';
    },
    categoryBgClass() {
      return this.category === 'SELLING' ? 'bg-selling' : 'bg-buying';
    }
  }

};
</script>

<style scoped>
.card-listing {
  background: #fff;
  border-left: 4px solid #ccc;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 12px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  font-family: 'Poppins', sans-serif;
}

.card-listing * {
  text-align: left !important;
}


.border-selling {
  border-left-color: #2dcc70;
}

.border-buying {
  border-left-color: #f39c12;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}

.td {
  display: flex;
  /* align-items: center; */
  justify-content: start;
  font-size: 14px;
  color: #333;
  /* background-color: red; */

}

.image-col img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.name-desc-col {
  flex: 2;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.name-desc-col h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.name-desc-col .description {
  margin: 0;
  font-size: 13px;
  color: #777;
}

.category-col {
  padding: 6px 12px;
  border-radius: 16px;
  font-weight: 600;
  text-transform: capitalize;
}

.bg-selling {
  background-color: rgba(45, 204, 112, 0.15); /* vert clair */
  color: #2dcc70;
}

.bg-buying {
  background-color: rgba(243, 156, 18, 0.15); /* orange clair */
  color: #f39c12;
}

.date-col {
  flex: 1;
  font-weight: 500;
}

.actions-col {
  flex: 0.5;
  gap: 10px;
  display: flex;
  justify-content: end;
}

.edit-icon,
.delete-icon {
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.edit-icon:hover {
  color: #3498db;
}

.delete-icon:hover {
  color: #e74c3c;
}
</style>
