<template>
    <div class="sidebar">
      <h3>Discussions</h3>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index">
          {{ contact.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const contacts = ref([
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Toi 💬' }
  ])
  </script>
  
  <style scoped>
  .sidebar {
    width: 25%;
    background-color: #202c33;
    color: white;
    padding: 1rem;
    overflow-y: auto;
  }
  .sidebar h3 {
    color: #25d366;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px;
    border-bottom: 1px solid #2a3942;
    cursor: pointer;
  }
  .sidebar li:hover {
    background-color: #2a3942;
  }
  </style>
  