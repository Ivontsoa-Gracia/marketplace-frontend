<template>
    <div class="sidebar">
      <h2>Discussions</h2>
      <ul>
        <li v-for="(contact, index) in contacts" :key="index" @click="selectContact(contact)">
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
    { name: 'Gracia 💌' },
  ])
  
  const selectContact = (contact) => {
    console.log('Contact sélectionné :', contact.name)
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 300px;
    background-color: #202c33;
    padding: 1rem;
    overflow-y: auto;
  }
  .sidebar h2 {
    margin-top: 0;
    color: #25d366;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #2a3942;
  }
  .sidebar li:hover {
    background-color: #2a3942;
  }
  </style>
  