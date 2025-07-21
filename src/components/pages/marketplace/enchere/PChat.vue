<template>
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
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import MessageBubble from '../../../organics/marketplace/enchere/MessageBubble.vue';
  
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
  .chat {
    flex: 1;
    background-color: #0b141a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  </style>
  