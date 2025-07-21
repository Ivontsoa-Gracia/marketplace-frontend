<template>
  <div class="layout-container">
    <div class="content-area">
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <ul>
            <li class="logo-item">
              <router-link to="/">
                <img src="/logo SVG/marketplace-logo.png" alt="Marketplace Logo" class="sidebar-logo" />
              </router-link>
            </li>

            <li>
              <router-link to="/" class="nav-icon" title="Home">
                <HomeIcon />
              </router-link>
            </li>

            <li>
              <router-link to="/profil" class="nav-icon" title="Dashboard">
                <GridIcon />
              </router-link>
            </li>

            <li>
              <div class="nav-icon toggle-link" @click="toggleListing" title="Listing">
                <ListIcon />
                <ChevronDownIcon v-if="!listingOpen" class="chevron-icon" />
                <ChevronUpIcon v-else class="chevron-icon" />
              </div>
              <ul v-if="listingOpen" class="submenu">
                <li>
                  <router-link to="/profil/listing/add" class="nav-icon" title="Add Listing">
                    <PlusIcon />
                  </router-link>
                </li>
                <li>
                  <router-link to="/profil/listing/view" class="nav-icon" title="View Listing">
                    <EyeIcon />
                  </router-link>
                </li>
              </ul>
            </li>

            <li>
              <router-link to="/profil/enchere/chat" class="nav-icon" title="ChatBox">
                <MessageCircleIcon />
              </router-link>
            </li>

            <!-- Profil / Déconnexion -->
            <li class="profile-bottom" v-click-outside="closeDropdown">
              <div class="profile-container" @click="toggleDropdown" title="Profile">
                <UserIcon />
              </div>

              <transition name="fade">
                <div v-if="dropdownOpen" class="dropdown-popover">
                  <a href="#" @click.prevent="confirmLogout" class="dropdown-link flex items-center gap-2 text-red-600 hover:text-red-800">
                    <LogOut class="w-5 h-5" />
                    <span>Déconnexion</span>
                  </a>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- Contenu principal -->
      <div class="page-content">
        <slot />
      </div>
    </div>

    <!-- ✅ Popup déconnexion -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-sm text-center">
          <h2 class="text-lg font-semibold mb-4">Confirmer la déconnexion</h2>
          <p class="mb-6 text-gray-600">Voulez-vous vraiment vous déconnecter ?</p>
          <div class="flex justify-center gap-4">
            <button @click="showModal = false" class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Annuler
            </button>
            <button @click="logout" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import vClickOutside from 'v-click-outside'
import {
  HomeIcon,
  GridIcon,
  ListIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
  EyeIcon,
  MessageCircleIcon,
  UserIcon,
  LogOut
} from 'lucide-vue-next'

const listingOpen = ref(false)
const dropdownOpen = ref(false)
const showModal = ref(false)

function toggleListing() {
  listingOpen.value = !listingOpen.value
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function closeDropdown() {
  dropdownOpen.value = false
}

function confirmLogout() {
  showModal.value = true
}

function logout() {
  window.location.href = '/logout'
}
</script>

<script>
export default {
  directives: {
    clickOutside: (await import('v-click-outside')).default
  }
}
</script>

<style scoped>
/* Layout structure */
.layout-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fcffff;
  font-family: 'Poppins', sans-serif;
}

.content-area {
  display: flex;
  height: 100%;
}

/* Sidebar styling */
.sidebar {
  width: 80px;
  background: #0f1115;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 100;
  padding: 20px 0;
}

.sidebar-nav ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.logo-item {
  margin-bottom: 20px;
}

.sidebar-logo {
  width: 40px;
  height: auto;
  border-radius: 6px;
}

.nav-icon {
  color: #10b981;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  transition: background 0.3s ease;
  cursor: pointer;
}

.nav-icon:hover {
  background: rgba(16, 185, 129, 0.15);
}

/* Submenu */
.toggle-link {
  position: relative;
}

.chevron-icon {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 14px;
  stroke: #10b981;
}

.submenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.submenu .nav-icon {
  width: 30px;
  height: 30px;
}

/* Profile & dropdown */
.profile-bottom {
  position: relative;
  margin-top: auto;
}

.profile-container {
  color: #10b981;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  cursor: pointer;
}

.profile-container:hover {
  background: rgba(16, 185, 129, 0.15);
}

.dropdown-popover {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #2e2e2e;
  padding: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
  min-width: 140px;
  z-index: 1000;
}

.dropdown-link {
  display: block;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  transition: background 0.3s;
  text-decoration: none;
}

.dropdown-link:hover {
  background: #10b981;
  color: #121212;
}

/* Page content */
.page-content {
  margin-left: 80px;
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
