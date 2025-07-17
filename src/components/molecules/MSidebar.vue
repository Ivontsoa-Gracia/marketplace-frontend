<template>
    <div class="layout-container">
      <!-- Header -->
      <header class="header">
        <div class="logo">
          <img src="/logo SVG/marketplace-logo.png" alt="Logo" />
          <div class="logo-name">
            <h3>AgriTrade</h3>
            <p>Smart Saha Marketplace</p>
          </div>
        </div>
  
        <div class="action">
          <AIcon url="/icon SVG/chatbox.svg" width="24px" height="24px" borderWidth="0px" backgroundColor="transparent" />
  
          <div class="profile-container" @click="toggleDropdown">
            <AIcon url="/icon SVG/profile.svg" width="30px" height="30px" borderWidth="0px" backgroundColor="transparent" />
            <ul class="dropdown" v-if="dropdownOpen">
              <li><a href="/profil">Dashboard</a></li>
              <li><a href="/logout">Log out</a></li>
            </ul>
          </div>
        </div>
      </header>
  
      <!-- Content below header -->
      <div class="content-area">
        <!-- Sidebar -->
        <aside class="sidebar">
          <nav class="sidebar-nav">
            <ul>
              <li>
                <router-link to="/" class="nav-link">
                  <i class="fas fa-home"></i> <span>Home</span>
                </router-link>
              </li>
  
              <li>
                <div class="nav-link toggle-link" @click="toggleListing">
                  <i class="fas fa-list"></i> <span>Listing</span>
                  <i :class="['fas', listingOpen ? 'fa-chevron-up' : 'fa-chevron-down']" class="chevron-icon"></i>
                </div>
                <ul v-if="listingOpen" class="submenu">
                  <li>
                    <router-link to="/profil/listing/add" class="nav-link">
                      <i class="fas fa-plus"></i> <span>Add Listing</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/profil/listing/view" class="nav-link">
                      <i class="fas fa-eye"></i> <span>View Listing</span>
                    </router-link>
                  </li>
                </ul>
              </li>
  
              <li>
                <router-link to="/chat" class="nav-link">
                  <i class="fas fa-comments"></i> <span>ChatBox</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </aside>
  
        <!-- Main Page Content -->
        <div class="page-content">
          <slot />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AIcon from "../atomes/AIcon.vue";
  
  export default {
    name: "MSidebar",
    components: {
      AIcon,
    },
    data() {
      return {
        listingOpen: false,
        dropdownOpen: false,
      };
    },
    methods: {
      toggleListing() {
        this.listingOpen = !this.listingOpen;
      },
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  .layout-container {
    font-family: 'Poppins', sans-serif;
    width: 100%;
  }
  
  .header {
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
  
  /* Main content area after header */
  .content-area {
    display: flex;
    margin-top: 60px; /* same height as header */
    height: calc(100vh - 60px);
    overflow: hidden;
  }
  
  /* Sidebar */
  .sidebar {
    width: 220px;
    background-color: #2dcc70;
    color: white;
    padding: 20px;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-nav li {
    margin-bottom: 10px;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    text-decoration: none;
    font-size: 15px;
    padding: 10px;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .toggle-link {
    cursor: pointer;
    justify-content: space-between;
  }
  
  .chevron-icon {
    margin-left: auto;
  }
  
  .submenu {
    margin-top: 5px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .submenu .nav-link {
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.05);
    padding: 8px 10px;
    border-radius: 4px;
  }
  
  /* Page content */
  .page-content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: #f9f9f9;
  }
  
  /* Header logo & action styles */
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
  </style>
  