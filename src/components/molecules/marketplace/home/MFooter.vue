<template>
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Column 1: Logo, description, social links -->
        <div class="footer-col footer-main">
          <div class="logo">
            <img src="/logo SVG/marketplace-logo.png" alt="Logo" />
            <div class="logo-name">
              <h3>AgriTrade</h3>
              <p>Smart Saha Marketplace</p>
            </div>
          </div>
  
          <AText
            contenu="Together, we’re building a fair and sustainable future for agriculture, where every producer has a voice, and every buyer makes a difference."
            fontSize="15px"
            textColor="rgb(156, 163, 175)"
            fontWeight="400"
            fontFamily="Poppins"
          />
  
          <div class="reseaux">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
  
        <!-- Column 2 -->
        <div class="footer-col">
          <h3 class="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
  
        <!-- Column 3 -->
        <div class="footer-col">
          <h3 class="footer-title">Useful Links</h3>
          <ul>
            <li><a href="#">SmartSaha Services</a></li>
            <li><a href="#">AgriTrade</a></li>
            <li><a href="#">AgriChat</a></li>
          </ul>
        </div>
  
        <!-- Column 4 -->
        <div class="footer-col">
          <h3 class="footer-title">Contact</h3>
          <p><i class="fas fa-envelope"></i> Smartsahaapp@gmail.com</p>
          <p><i class="fas fa-phone"></i> +261 34 12 345 67</p>
        </div>
      </div>
  
      <div class="footer-bottom">
        <div class="footer-left">
          © 2025 AgriTrade. All rights reserved
        </div>
        <div class="footer-right">
          <a href="#">Legal Notice</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import AText from '../../../atomes/AText.vue';
  
  export default {
    components: {
      AText,
    },
  };
  </script>
  
  <style scoped>

   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
  .footer-container {
    background-color: #1a1a1a;
    padding: 40px;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    color: rgb(156, 163, 175);
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .footer-main {
    grid-row: span 3;
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .logo img {
    height: 40px;
    width: auto;
    border-radius: 8px;
  }
  
  .logo-name h3 {
    margin: 0;
    font-size: 20px;
    color: #2dcc70;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .logo-name p {
    margin: 0;
    font-size: 14px;
    color: #e5e7eb;
    font-weight: 500;
  }
  
  .reseaux {
    margin-top: 15px;
    display: flex;
    gap: 12px;
  }
  
  .reseaux a {
    font-size: 18px;
    color: white;
    background-color: rgb(156, 163, 175, 00.03em);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .reseaux a:hover {
    background-color: rgb(156, 163, 175, 0.05);
    color: #ffffff;
  }
  
  .footer-title {
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 12px;
    color: white;
    letter-spacing: 0.03em;
    /* text-transform: uppercase; */
  }
  
  .footer-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-col ul li {
    margin-bottom: 8px;
  }
  
  .footer-col a {
    text-decoration: none;
    color: rgb(156, 163, 175);
    font-size: 15px;
    transition: color 0.3s ease;
  }
  
  .footer-col a:hover {
    color: white;
  }
  
  .footer-col p {
    font-size: 15px;
    color: rgb(156, 163, 175);
    margin: 4px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .footer-col p i {
    color:rgb(156, 163, 175);
    font-size: 18px;
  }
  
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #333;
    padding-top: 20px;
    font-size: 14px;
    color: rgb(156, 163, 175);
    margin-top: 40px;
    flex-wrap: wrap;
  }
  
  .footer-right a {
    color: rgb(156, 163, 175);
    text-decoration: none;
    margin-left: 18px;
    transition: color 0.3s ease;
  }
  
  .footer-right a:hover {
    color: #ffffff;
  }
  
  /* Responsive */
  
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .footer-main {
      grid-row: auto;
    }
    .footer-bottom {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
    .footer-right {
      margin-top: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
    .footer-right {
      margin-top: 15px;
    }
  }
  </style>
  