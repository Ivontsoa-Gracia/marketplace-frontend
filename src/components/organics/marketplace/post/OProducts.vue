<template>
    <div class="product-container">
      
        <div class="filter-container">

        <select v-model="selectedCategory" class="filter-select">
            <option value="">Toutes les catégories</option>
            <option v-for="(cat, index) in availableCategories" :key="index" :value="cat">
                {{ cat }}
            </option>
        </select>

        <select v-model="selectedRegion" class="filter-select">
            <option value="">Toutes les régions</option>
            <option v-for="(region, index) in availableRegions" :key="index" :value="region">
                {{ region }}
            </option>
        </select>

        </div>

  
      <div class="section-title">
        <h2>Produits populaires</h2>
        <div class="scroll-controls">
          <button @click="scrollLeft">‹</button>
          <button @click="scrollRight">›</button>
        </div>
      </div>
  
      <div class="popular-product" ref="scrollArea">
        <MCard
            v-for="(product, index) in filteredProducts"
            :key="index"
            :category="product.category"
            :imageUrl="product.imageUrl"
            :productName="product.productName"
            :region="product.region"
            :price="product.price"
            :description="product.description"
        />

      </div>
  
      <div class="section-title">
        <h2>Nouveaux produits</h2>
        <span class="voir-tout" @click="showAllNewArrivals = true">Voir tout</span>
      </div>
  
      <div class="new-arrival">
        <MCard
            v-for="(product, index) in newArrivalProducts"
            :key="index"
            :category="product.category"
            :imageUrl="product.imageUrl"
            :productName="product.productName"
            :region="product.region"
            :price="product.price"
            :description="product.description"

        />
      </div>

  
    </div>
  </template>
  
  <script>
  import MCard from '../../../molecules/marketplace/post/MCard.vue';
  import AInput from '../../../atomes/AInput.vue';
  
  export default {
    components: {
      MCard,
      AInput,
    },
    data() {
      return {
        selectedCategory: '',
        selectedRegion: '',
        showAllNewArrivals: false,
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
        ]

      };
    },  
    computed: {
        filteredProducts() {
            return this.products.filter(product => {
            const matchCategory =
                !this.selectedCategory || product.category === this.selectedCategory;
            const matchRegion =
                !this.selectedRegion || product.region === this.selectedRegion;
            return matchCategory && matchRegion;
            });
        },
        availableRegions() {
            const regions = new Set(this.products.map(p => p.region));
            return Array.from(regions);
        },
        availableCategories() {
            const categories = new Set(this.products.map(p => p.category));
            return Array.from(categories);
        },
        newArrivalProducts() {
            return this.showAllNewArrivals
            ? this.filteredProducts
            : this.filteredProducts.slice(0, 8); // 6 = 2 lignes de 3 cartes (par exemple)
        },
    },

    methods: {
      scrollLeft() {
        this.$refs.scrollArea.scrollBy({ left: -300, behavior: 'smooth' });
      },
      scrollRight() {
        this.$refs.scrollArea.scrollBy({ left: 300, behavior: 'smooth' });
      },
    },
  };
  </script>
  
  <style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  .product-container {
    padding: 40px;
    background-color: #fefefe;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }
  
  .filter-container {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    align-items: center;
  }
  
  .filter-input {
    width: 300px;
  }
  
  .filter-select {
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-family: 'Poppins', sans-serif;
  }
  
  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #1a1a1a;
  }
  
  .scroll-controls button {
    background-color: #EFEFEF;
    color: #555555;
    border: none;
    font-size: 24px;
    padding: 6px 12px;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;

  }
  
  .scroll-controls button:hover {
    background-color: #d3d3d3;
  }
  
  .popular-product {
    display: flex;
    gap: 5px;
    overflow-x: auto;
    padding-bottom: 10px;
    margin-bottom: 50px;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none; 
  }

  .popular-product::-webkit-scrollbar {
    display: none; 
  }
  
  .new-arrival {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: -25px;
  }
  
  .voir-tout {
    font-size: 14px;
    color: #2DCC70;
    text-decoration: underline;
    font-weight: 500;
  }
  
  .voir-tout:hover {
    text-decoration: underline;
    color: #166C53;

  }
  </style>
  