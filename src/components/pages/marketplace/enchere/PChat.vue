<template>
    <div class="layout">
      <MSidebar />
      
      <div class="chat">
        <div class="messages">
          <MessageBubble
            v-for="(msg, i) in messages"
            :key="i"
            :message="msg.text"
            :sent="msg.sent"
          />
        </div>
    
        <div class="input-bar">
          <input v-model="input" placeholder="Tape un message..." @keyup.enter="sendMessage" />
          <button @click="sendMessage">Envoyer</button>
        </div>
      </div>
      
      <Annonce />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MessageBubble from '../../../organics/marketplace/enchere/MessageBubble.vue'
  import MSidebar from '../../../molecules/marketplace/enchere/MSidebar.vue'
  import Annonce from '../../../organics/marketplace/enchere/Annonce.vue'
  
  const input = ref('')
  const messages = ref([
    { text: 'Salut !', sent: false },
    { text: 'Coucou toi 💚', sent: true },
  ])
  
  const sendMessage = () => {
    if (input.value.trim()) {
      messages.value.push({ text: input.value, sent: true })
      input.value = ''
    }
  }
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
    background-color: #111b21;
    overflow: hidden;
  }
  
  /* Sidebar */
  ::v-deep(.sidebar) {
    width: 25%;
    min-width: 250px;
    max-width: 300px;
    background-color: #202c33;
  }
  
  /* Chat */
  .chat {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0b141a;
    border-left: 1px solid #2a3942;
    border-right: 1px solid #2a3942;
  }
  
  .messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .input-bar {
    display: flex;
    background-color: #202c33;
    padding: 10px;
  }
  
  .input-bar input {
    flex: 1;
    padding: 10px;
    border: none;
    background-color: #2a3942;
    color: white;
    border-radius: 5px;
  }
  
  .input-bar button {
    margin-left: 10px;
    background-color: #25d366;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
  
  /* Annonce */
  ::v-deep(.annonce) {
    width: 25%;
    min-width: 250px;
    max-width: 300px;
    background-color: #1e2c33;
    color: white;
    padding: 1rem;
    overflow-y: auto;
  }
  </style>
  