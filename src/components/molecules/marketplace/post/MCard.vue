<template>
    <div class="card-container">
      <div class="card-crop">
        <div class="image-wrapper">
          <span class="badge">{{ category }}</span>
  
          <svg
            class="fav-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
                C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <AImage
            :url="imageUrl"
            class="image"
            width="100%"
            height="250px"
            borderRadius="4px"
            @click="showPopup = true"
          />

        </div>
  
        <div class="top-info">
          <AText
            :contenu="productName"
            fontSize="18px"
            textColor="#1C1F1E"
            fontWeight="700"
            fontFamily="Poppins"
            textAlign="left"
          />
          <AText
            :contenu="region"
            fontSize="12px"
            textColor="#B3B2B2"
            fontWeight="600"
            fontFamily="Poppins"
            textAlign="right"
          />
        </div>
  
        <div class="bottom-info">
          <AText
            :contenu="price"
            fontSize="18px"
            textColor="#166C53"
            fontWeight="600"
            fontFamily="Poppins"
          />
          <AButton
            :backgroundColor="category === 'SELLING' ? '#F1C40F' : '#2DCC70'"
            :value="category === 'SELLING' ? 'Place bid' : 'Make offer'"
            width="110"
            height="36"
            borderRadius="4px"
            borderWidth="0px"
            textColor="#fefefe"
            iconUrl="/icon SVG/cart.svg"
            fontFamily="Poppins"
          />
        </div>
      </div>

      <OPopup v-if="showPopup" @close="showPopup = false">
        <div class="popup-img">
          <img :src="imageUrl" alt="product" class="popup-image" />

          <!-- Localisation superposée -->
          <div class="popup-location-overlay">
            <img src="/icon SVG/localisation.svg" alt="Location" class="location-icon" />
            <span class="location-text">{{ region }}</span>
          </div>
        </div>

        <div class="popup-info">
          <h3 class="popup-title">{{ productName }}</h3>
          <p class="notice"><small>This will notify the admin.</small></p>
          <p class="popup-description">{{ description }}</p>

          <div class="popup-meta">
            <div class="meta-left">
              <img src="/logo SVG/marketplace-logo.png" alt="SmartSaha Logo" class="company-logo" />
              <span class="company-name">SmartSaha</span>
            </div>
            <div class="meta-right">
              <p class="popup-price"><strong>Price:</strong> {{ price }}</p>
            </div>
          </div>

          <div class="popup-meta">
            <div class="meta-left">
              <p><strong>Quantity:</strong> 50 kg</p>
            </div>
            <div class="meta-right">
              <p><strong>Currency:</strong> USD</p>
            </div>
          </div>

          <label for="message" class="popup-label">Your message</label>
          <textarea
            id="message"
            v-model="message"
            placeholder="Write your message here..."
            class="popup-textarea"
          ></textarea>

          <AButton
            :backgroundColor="category === 'SELLING' ? '#F1C40F' : '#2DCC70'"
            :value="category === 'SELLING' ? 'Place bid' : 'Make offer'"
            width="150"
            height="40"
            borderRadius="6px"
            borderWidth="0px"
            textColor="#fefefe"
            iconUrl="/icon SVG/cart.svg"
            fontFamily="Poppins"
            class="popup-button"
          />
        </div>
      </OPopup>



    </div>
  </template>

<script>
import AText from '../../../atomes/AText.vue';
import AButton from '../../../atomes/AButton.vue';
import AImage from '../../../atomes/AImage.vue';
import OPopup from '../../../organics/marketplace/post/OPopup.vue';

export default {
  components: {
    AText,
    AButton,
    AImage,
    OPopup
  },
  props: {
    category: {
      type: String,
      // default: "SELLING", // ou "BUYING"
    },
    imageUrl: {
      type: String,
      // default: "/images/background-hero.jpeg"
    },
    productName: {
      type: String,
      // default: "Vanilla Bean"
    },
    region: {
      type: String,
      // default: "Madagascar"
    },
    price: {
      type: String,
      // default: "$300 / kg"
    },
    description: {
      type: String,
      // default: "$300 / kg"
    },


  },
  data() {
    return {
      showPopup: false,
      message: ''
    };
  },

}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
.card-container {
  padding: 20px;
  display: flex;
  justify-content: left;
  width: 100%;
  box-sizing: border-box;
  max-width: 100vw;
  font-family: 'Poppins', sans-serif;
}

.card-crop {
  width: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.image-wrapper {
  position: relative;
}

.image {
  width: 100%;
  border-radius: 0;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  font-family: 'Poppins';
}

.fav-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.fav-icon:hover ,
.fav-icon:focus {
  fill: #e90013;
  stroke: none; 
}


.top-info, .bottom-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.bottom-info {
    margin-bottom: 20px;
    margin-top: -10px;
}

.popup-img {
  position: relative;
  width: 50%;
  flex-shrink: 0;
}

.popup-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Localisation sur l’image */
.popup-location-overlay {
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.location-icon {
  width: 14px;
  height: 14px;
  filter: brightness(0) invert(1);
}

.location-text {
  color: white;
  font-size: 13px;
  font-family: 'Poppins', sans-serif;
}

.popup-label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  font-family: 'Poppins', sans-serif;
}

.popup-textarea {
  width: 100%;
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  padding: 10px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.popup-textarea:focus {
  border: 1px solid #ccc;
}

.popup-button {
  display: block;
  margin-left: auto;
}

.popup-title {
  font-size: 28px;
  color: #2dcc70;
  font-weight: 700;
  margin: 0;
}

.notice {
  color: #faac53;
  margin-top: -5px;
}

.popup-meta {
  display: flex;
  /* justify-content: space-between; */
  gap: 100px;
  align-items: center;
  margin: 8px 0;
}

.meta-left,
.meta-right {
  display: flex;
  align-items: center;
}

.company-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.company-name {
  font-weight: 600;
  font-size: 15px;
  color: #333;
  margin-left: 10px;
}

.popup-price {
  font-size: 15px;
  font-weight: 600;
  color: #166c53;
  margin: 0;
}


</style>