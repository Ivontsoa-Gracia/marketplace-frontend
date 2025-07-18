<template>
    <div class="header-container">
      <div class="logo">
        <img src="/logo SVG/marketplace-logo.png" alt="">
        <div class="logo-name">
          <h3>AgriTrade</h3>
          <p>Smart Saha Marketplace</p>
        </div>
      </div>
  
      <div class="menu">
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/a-propos">À propos</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/produits">Produits</router-link></li>
        </ul>
      </div>
  
      <div class="action">
        <div class="lang-switcher" @click="toggleLangDropdown">
          <span>{{ currentLang }}</span>
          <ul v-if="langDropdownOpen" class="lang-dropdown">
            <li @click="setLanguage('Fr')">🇫🇷 Français</li>
            <li @click="setLanguage('Mg')">🇲🇬 Malagasy</li>
          </ul>
        </div>
  
        <template v-if="!isLoggedIn">
          <router-link to="/signin">
            <AButton 
              backgroundColor="#2DCC70"
              width="158"
              height="48"
              value="SIGN IN"
              borderWidth="0px"
              borderRadius="4px"
              textColor="#fefefe"
              fontFamily="Poppins"
            />
          </router-link>

          <router-link to="/auth">
            <AButton 
              backgroundColor="transparent"
              width="158"
              height="48"
              value="SIGN UP"
              borderWidth="2px"
              borderColor="#2DCC70"
              borderRadius="4px"
              textColor="#2DCC70"
              fontFamily="Poppins"
            />
          </router-link>

        </template>
        <template v-else>
          <AIcon url="/icon SVG/chatbox.svg" width="24px" height="24px" borderWidth="0px" backgroundColor="transparent"/>
          
          <div class="profile-container" @click="toggleDropdown">
            <AIcon url="/icon SVG/profile.svg" width="30px" height="30px" borderWidth="0px" backgroundColor="transparent"/>
            <ul class="dropdown" v-if="dropdownOpen">
              <li><a href="/profil">Dashboard</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  
  <script>
  import AIcon from "../../../atomes/AIcon.vue";
  import AButton from "../../../atomes/AButton.vue";
  
  export default {
    components: {
      AIcon,
      AButton
    },
    data() {
      return {
        isLoggedIn: true,
        dropdownOpen: false,
        langDropdownOpen: false,
        currentLang: 'Fr', 
  
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      closeDropdown() {
        this.dropdownOpen = false;
      }
    },
    mounted() {
      document.addEventListener("click", this.handleClickOutside);
      document.addEventListener("click", this.handleClickOutside);
  
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      handleClickOutside(event) {
        const profile = this.$el.querySelector(".profile-container");
        if (profile && !profile.contains(event.target)) {
          this.dropdownOpen = false;
        }
  
        const lang = this.$el.querySelector(".lang-switcher");
        if (lang && !lang.contains(event.target)) {
          this.langDropdownOpen = false;
        }
  
      },
      toggleLangDropdown() {
        this.langDropdownOpen = !this.langDropdownOpen;
      },
      setLanguage(lang) {
        this.currentLang = lang;
        this.langDropdownOpen = false;
        // Tu peux ajouter ici la logique pour changer de langue (ex: i18n)
      },
  
    }
  };
  </script>
  
    <style scoped>

   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

  .header-container {
    position: fixed;
    background-color: #fefefe;
    width: 100%;
    max-width: 100vw;
    height: 60px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-family: 'Poppins', sans-serif;
    top: 0;
  left: 0;

  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .logo img {
    height: 40px;
    width: auto;
    border-radius: 8px;
  }
  
  .logo-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.2;
  }
  
  .logo-name h3 {
    margin: 0;
    font-size: 16px;
    color: #2DCC70;
    font-weight: bold;
  }
  
  .logo-name p {
    margin: 0;
    font-size: 12px;
    color: #212121;
  }
  
  .menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .menu ul {
    display: flex;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu li a {
    position: relative;
    text-decoration: none;
    font-size: 14px;
    color: #555555;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .menu li a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: #22A84F;
    transition: width 0.3s ease-in-out;
  }
  
  .menu li a:hover,
  .menu li a:focus {
    color: #22A84F;
  }
  
  .menu li a:hover::after,
  .menu li a:focus::after {
    width: 100%;
  }
  
  
  .action {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  
  .profile-container {
    position: relative;
    cursor: pointer;
  }
  
  .dropdown {
    position: absolute;
    top: 110%;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 8px 0;
    border-radius: 4px;
    min-width: 140px;
    z-index: 100;
  }
  
  .dropdown li {
    font-size: 14px;
    padding: 10px 16px;
    transition: background-color 0.3s;
  }
  
  .dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  .dropdown li a {
    text-decoration: none;
    color: #212121;
    display: block;
  }
  
  .lang-switcher {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    color: #212121;
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    user-select: none;
  }
  
  .lang-switcher span {
    display: inline-block;
  }
  
  .lang-dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    list-style: none;
    padding: 0;
    margin: 4px 0 0 0;
    border-radius: 4px;
    min-width: 100px;
    z-index: 100;
  }
  
  .lang-dropdown li {
    font-size: 14px;
    padding: 8px 12px;
    transition: background-color 0.3s;
    cursor: pointer;
  }
  
  .lang-dropdown li:hover {
    background-color: #f0f0f0;
  }
  
  
  /* Responsive */
  @media (max-width: 768px) {
    .menu {
      display: none;
    }
  
    .header-container {
      flex-direction: column;
      height: auto;
      padding: 10px 20px;
    }
  }
  
    </style>
    