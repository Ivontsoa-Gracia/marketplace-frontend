<template>
    <div class="add-listing-wrapper">
      <!-- Top Bar -->
      <div class="top-bar">
        <h2>Create New Listing</h2>
        <router-link to="/profil/product/add" class="add-product-btn">
            <i class="fas fa-plus"></i> Add Product
        </router-link>

      </div>
  
      <!-- Indicateur de progression animé -->
      <div class="progress-trail">
        <div class="progress-line">
          <div
            class="progress-fill"
            :style="{ width: ((currentStep - 1) / (4 - 1)) * 100 + '%' }"
          ></div>
        </div>
        <div class="steps">
          <div
            v-for="step in 4"
            :key="step"
            class="step-circle"
            :class="{
              active: currentStep === step,
              completed: currentStep > step
            }"
            @click="currentStep = step"
            :title="'Step ' + step"
          >
            <span>{{ step }}</span>
          </div>
        </div>
      </div>
  
      <div class="main-content">
        <form class="form-add-listing" @submit.prevent="submitListing">
          <!-- ÉTAPE 1 -->
          <div v-if="currentStep === 1" class="form-section">
            <div class="form-row">
              <div class="form-group">
                <label for="type">Type of Listing</label>
                <select id="type" v-model="formData.type">
                  <option value="">Select</option>
                  <option v-for="option in typeOptions" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="crop">Crop</label>
                <select id="crop" v-model="formData.crop">
                  <option value="">Select</option>
                  <option v-for="crop in cropOptions" :key="crop" :value="crop">{{ crop }}</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- ÉTAPE 2 -->
          <div v-if="currentStep === 2" class="form-section">
            <div class="form-row">
              <div class="form-group">
                <label for="quantity">Quantity (kg)</label>
                <input id="quantity" v-model="formData.quantity" type="number" placeholder="e.g. 100" />
              </div>
  
              <div class="form-group">
                <label for="price">Price per kg</label>
                <input id="price" v-model="formData.price" type="number" placeholder="e.g. 2500" />
              </div>
  
              <div class="form-group">
                <label for="currency">Currency</label>
                <select id="currency" v-model="formData.currency">
                  <option value="">Select</option>
                  <option v-for="currency in currencyOptions" :key="currency" :value="currency">{{ currency }}</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- ÉTAPE 3 -->
          <div v-if="currentStep === 3" class="form-section">
            <div class="form-row">
              <div class="form-group">
                <label for="vendor">Vendor Name</label>
                <input id="vendor" v-model="formData.vendorName" type="text" placeholder="Vendor name" />
              </div>
  
              <div class="form-group">
                <label for="country">Country</label>
                <select id="country" v-model="formData.country">
                  <option value="">Select</option>
                  <option v-for="country in countryOptions" :key="country" :value="country">{{ country }}</option>
                </select>
              </div>
  
              <div class="form-group">
                <label for="location">Location</label>
                <input id="location" v-model="formData.location" type="text" placeholder="City or region" />
              </div>
            </div>
          </div>
  
          <!-- ÉTAPE 4 -->
          <div v-if="currentStep === 4" class="form-section">
            <div class="form-row full">
              <div class="form-group full-width">
                <label for="description">Description</label>
                <textarea id="description" v-model="formData.description" rows="4" placeholder="Add description..."></textarea>
              </div>
            </div>
  
            <div class="form-row full">
              <div class="form-group full-width">
                <label for="image">Upload Image</label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                />
              </div>
            </div>
          </div>
  
          <!-- Navigation -->
          <div class="form-actions">
            <button v-if="currentStep > 1" type="button" @click="prevStep">
              <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button
              v-if="currentStep < 4"
              type="button"
              @click="nextStep"
              style="margin-left: 10px;"
            >
              Next <i class="fas fa-arrow-right"></i>
            </button>
            <button
              v-if="currentStep === 4"
              type="submit"
              style="margin-left: 10px;"
            >
              <i class="fas fa-plus-circle"></i> Create Listing
            </button>
          </div>
        </form>
  
        <!-- Aperçu à droite -->
        <div class="preview">
          <h3>Preview</h3>
          <ul>
            <li><strong>Type:</strong> {{ formData.type || '—' }}</li>
            <li><strong>Crop:</strong> {{ formData.crop || '—' }}</li>
            <li><strong>Quantity:</strong> {{ formData.quantity || '—' }} kg</li>
            <li><strong>Price per kg:</strong> {{ formData.price || '—' }}</li>
            <li><strong>Currency:</strong> {{ formData.currency || '—' }}</li>
            <li><strong>Vendor Name:</strong> {{ formData.vendorName || '—' }}</li>
            <li><strong>Country:</strong> {{ formData.country || '—' }}</li>
            <li><strong>Location:</strong> {{ formData.location || '—' }}</li>
            <li><strong>Description:</strong> {{ formData.description || '—' }}</li>
            <li class="perv-img">
              <strong>Image:</strong>
              <img
                v-if="imagePreview"
                :src="imagePreview"
                alt="Preview Image"
                class="preview-image"
              />
              <span v-else>—</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MAddListing',
    props: {
      typeOptions: Array,
      cropOptions: Array,
      countryOptions: Array,
      currencyOptions: Array
    },
    data() {
      return {
        currentStep: 1,
        formData: {
          type: '',
          crop: '',
          vendorName: '',
          quantity: '',
          price: '',
          currency: '',
          country: '',
          location: '',
          description: '',
          imageFile: null
        },
        imagePreview: null
      };
    },
    methods: {
      nextStep() {
        if (this.currentStep < 4) this.currentStep++;
      },
      prevStep() {
        if (this.currentStep > 1) this.currentStep--;
      },
      submitListing() {
        console.log('Listing Created:', this.formData);
        this.$emit('create', this.formData);
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.formData.imageFile = file;
          const reader = new FileReader();
          reader.onload = e => {
            this.imagePreview = e.target.result;
          };
          reader.readAsDataURL(file);
        } else {
          this.formData.imageFile = null;
          this.imagePreview = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  
  .add-listing-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .top-bar h2 {
    font-size: 22px;
    font-weight: 600;
  }
  
  .add-product-btn {
  display: inline-flex;
  align-items: center;
  background-color: #2DCC70;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none; /* enlève le soulignement du lien */
  transition: background-color 0.3s;
}

.add-product-btn i {
  margin-right: 6px;
}

.add-product-btn:hover {
  background-color: #47dd86;
}

  .progress-trail {
    position: relative;
    margin-bottom: 30px;
    user-select: none;
    max-width: 600px;
    /* margin-left: auto;
    margin-right: auto; */
  }
  
  .progress-line {
    position: relative;
    height: 6px;
    background: #e0e0e0;
    border-radius: 4px;
  }
  
  .progress-fill {
    position: absolute;
    height: 6px;
    background: #F1C40F;
    border-radius: 4px;
    transition: width 0.4s ease;
    top: 0;
    left: 0;
    width: 0;
    z-index: 1;
  }
  
  .steps {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
    position: relative;
    top: -20px;
    z-index: 2;
  }
  
  .step-circle {
    width: 28px;
    height: 28px;
    background: #e0e0e0;
    border-radius: 50%;
    border: 3px solid #e0e0e0;
    color: #777;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  }
  
  .step-circle.completed {
    background: #F1C40F;
    border-color: #F1C40F;
    color: white;
  }
  
  .step-circle.active {
    background: #121212;
    border-color: #121212;
    color: #fcffff;
    box-shadow: 0 0 8px rgba(199, 199, 199, 0.6);
  }
  
  .step-circle:hover:not(.active) {
    border-color: #ecc31e;
    color: #fcffff;
  }
  
  .main-content {
    display: flex;
    gap: 40px;
  }
  
  /* Formulaire à gauche */
  .form-add-listing {
    flex: 1;
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
  }
  
  .form-section {
    margin-bottom: 25px;
  }
  
  .form-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .form-row.full {
    flex-direction: column;
  }
  
  .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .full-width {
    width: 100%;
  }
  
  label {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #333;
  }
  
  input,
  select,
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: inherit;
  }
  
  textarea {
    resize: vertical;
  }
  
  .form-actions {
    text-align: right;
    margin-top: 20px;
  }
  
  .form-actions button {
    background-color: #2DCC70;
    color: white;
    padding: 10px 20px;
    border: none;
    font-weight: 500;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-actions button i {
    margin-right: 6px;
  }
  
  .form-actions button:hover {
    background-color: #28b461;
  }
  
  /* Aperçu à droite */
  .preview {
    width: 320px;
    background: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 5px rgb(0 0 0 / 0.1);
    font-size: 14px;
    color: #222;
  }
  
  .preview h3 {
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
  }
  
  .preview ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .preview li {
    margin-bottom: 12px;
  }
  
  .preview strong {
    display: inline-block;
    width: 110px;
  }
  
  .preview-image {
    max-width: 80px;
    height: 80px;
    border-radius: 4px;
    margin-top: 6px;
    object-fit: contain;
  }
  .perv-img {
    display: flex;
    align-items: center;
  }
  </style>
  