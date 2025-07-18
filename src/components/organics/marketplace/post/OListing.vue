<template>
    <div class="listing-container">
  
      <div class="filter-bar">
        <!-- Filtre catégorie -->
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="SELLING">Selling</option>
          <option value="BUYING">Buying</option>
        </select>
  
        <!-- Filtre produit -->
        <select v-model="selectedProduct">
          <option value="">All Products</option>
          <option
            v-for="(productName, index) in uniqueProductNames"
            :key="index"
            :value="productName"
          >{{ productName }}</option>
        </select>

        <input
          type="date"
          v-model="selectedDate"
          placeholder="Select date"
          class="date-input"
        />
  
        <button @click="addListing" class="add-listing-btn">
            <i class="fas fa-plus" style="margin-right: 6px;"></i> Add Listing
        </button>
      </div>
  
      <div class="list-listing">
        <MCardListing
            v-for="(product, index) in paginatedProducts"
            :key="index"
            v-bind="product"
            @edit="handleEdit(product)"
            @delete="handleDelete(product)"
        />
      </div>

      <div v-if="paginatedProducts.length === 0" class="no-results">
          <i class="fas fa-exclamation-circle"></i>
          Aucune annonce trouvée...
      </div>
  
      <!-- Pagination -->
      <div class="pagination">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          aria-label="Previous page"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
  
        <button
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
  
        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          aria-label="Next page"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
  
    </div>
  </template>
  
  <script>
  import MCardListing from '../../../molecules/marketplace/post/MCardListing.vue';
  
  export default {
    components: { MCardListing },
    data() {
      return {
        products: [
          {
            category: 'SELLING',
            imageUrl: '/images/corn.jpeg',
            productName: 'Corn',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'High-quality vanilla beans, hand-picked and sun-dried for maximum flavor.'
          },
          {
            category: 'BUYING',
            imageUrl: '/images/cacao.jpeg',
            productName: 'Cocoa Beans',
            region: 'Ghana',
            price: '$200 / kg',
            description: 'Looking for premium cocoa beans with high butter content for chocolate making.'
          },
          {
            category: 'SELLING',
            imageUrl: '/images/vanille.jpeg',
            productName: 'Vanilla beans',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'Organic vanilla harvested sustainably in Madagascar’s eastern regions.'
          },
          {
            category: 'SELLING',
            imageUrl: '/images/corn.jpeg',
            productName: 'Corn',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'High-quality vanilla beans, hand-picked and sun-dried for maximum flavor.'
          },
          {
            category: 'BUYING',
            imageUrl: '/images/cacao.jpeg',
            productName: 'Cocoa Beans',
            region: 'Ghana',
            price: '$200 / kg',
            description: 'Looking for premium cocoa beans with high butter content for chocolate making.'
          },
          {
            category: 'SELLING',
            imageUrl: '/images/vanille.jpeg',
            productName: 'Vanilla beans',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'Organic vanilla harvested sustainably in Madagascar’s eastern regions.'
          },
          {
            category: 'SELLING',
            imageUrl: '/images/corn.jpeg',
            productName: 'Corn',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'High-quality vanilla beans, hand-picked and sun-dried for maximum flavor.'
          },
          {
            category: 'BUYING',
            imageUrl: '/images/cacao.jpeg',
            productName: 'Cocoa Beans',
            region: 'Ghana',
            price: '$200 / kg',
            description: 'Looking for premium cocoa beans with high butter content for chocolate making.'
          },
          {
            category: 'SELLING',
            imageUrl: '/images/vanille.jpeg',
            productName: 'Vanilla beans',
            region: 'Madagascar',
            price: '$300 / kg',
            description: 'Organic vanilla harvested sustainably in Madagascar’s eastern regions.'
          },
        ],
        selectedCategory: '',
        selectedProduct: '',
        selectedDate: '',
        currentPage: 1,
        itemsPerPage: 4,
      };
    },
    computed: {
      uniqueProductNames() {
        const names = this.products.map(p => p.productName);
        return [...new Set(names)];
      },
      filteredProducts() {
        return this.products.filter(p => {
          const matchCategory =
            this.selectedCategory === '' || p.category === this.selectedCategory;
          const matchProduct =
            this.selectedProduct === '' || p.productName === this.selectedProduct;
          const matchDate =
            this.selectedDate === '' || p.date === this.selectedDate;
          return matchCategory && matchProduct && matchDate;
        });
      },
      totalPages() {
        return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
      },
      paginatedProducts() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.filteredProducts.slice(start, end);
      },
    },
    watch: {
      selectedCategory() {
        this.currentPage = 1;
      },
      selectedProduct() {
        this.currentPage = 1;
      },
      selectedDate() {
        this.currentPage = 1;
      },
    },
    methods: {
      handleEdit(product) {
        console.log('Edit:', product);
      },
      handleDelete(product) {
        console.log('Delete:', product);
      },
      addListing() {
        alert('Add Listing clicked!');
      },
      goToPage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  
  .listing-container {
    padding: 20px;
    /* background-color: #f4f6f8; */
  }
  
  .filter-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
  }
  
  select,
  .date-input {
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 14px;
    min-width: 150px;
    font-family: 'Poppins', sans-serif;
  }
  
  .add-listing-btn {
    margin-left: auto;
    background-color: #2dcc70;
    color: white;
    border: none;
    padding: 8px 20px;
    font-weight: medium;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
  }
  
  .add-listing-btn:hover {
    background-color: #27b05a;
  }
  
  .list-listing {
    margin-top: 50px;
  }
  
  /* Pagination */
  
  .pagination {
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    border: 1px solid #ccc;
    background: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pagination button i {
    font-size: 14px;
  }
  
  .pagination button:hover:not(:disabled) {
    background-color: #2dcc70;
    color: white;
  }
  
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pagination button.active {
    background-color: #2dcc70;
    color: white;
    border-color: #2dcc70;
  }

  .no-results {
    text-align: center;
    color: #999;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    opacity: 0.8;
}

.no-results i {
  font-size: 30px;
  color: #ccc;
}

  </style>
  