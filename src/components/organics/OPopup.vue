<template>
    <div class="popup-overlay" @click.self="$emit('close')">
      <div class="popup-box">
        <button class="popup-close" @click="$emit('close')" aria-label="Close popup">&times;</button>
        <div class="popup-wrapper">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OPopup',
    emits: ['close'],
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-box {
    position: relative;
    background: #fff;
    border-radius: 12px;
    width: 90%;
    /* max-width: 600px; */
    padding: 30px 20px 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    font-family: 'Poppins', sans-serif;
    animation: fadeIn 0.3s ease;
  }
  
  .popup-close {
    position: absolute;
    top: 15px;
    right: 18px;
    font-size: 28px;
    font-weight: bold;
    color: #333;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
  }
  
  .popup-close:hover {
    color: #151515;
  }
  .popup-wrapper {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.popup-img img{
    width: 100%;
}

.popup-image {
  width: 40%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.popup-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.popup-title {
  font-size: 22px;
  color: #2dcc70;
  font-weight: 700;
  margin: 0;
}

.popup-description {
  font-size: 14px;
  color: #444;
  line-height: 1.4;
}

.popup-quantity,
.popup-price {
  font-size: 16px;
  font-weight: 600;
  color: #166c53;
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


.popup-button {
  display: block;
  margin-left: auto;
}

  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  