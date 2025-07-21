<template>
    <div class="layout">
      <MSidebar />
  
      <div class="chat">
        <!-- Barre d'en-tête avec option call -->
        <div class="chat-header">
          <div class="contact-info">
            <span>Nom du contact</span>
          </div>
          <div class="actions">
            <button class="call-btn" title="Appel vocal">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25d366" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.22a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.21 1.11z"/>
              </svg>
            </button>
          </div>
        </div>
  
        <div class="messages">
            <MessageBubble
                v-for="(msg, i) in messages"
                :key="i"
                :message="msg.text"
                :sent="msg.sent"
                :time="msg.time"
                profileImage="/images/profil.jpeg"
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

  const baseTime = new Date()

    const messages = ref([
    {
        text: 'Salut !',
        sent: false,
        time: new Date(baseTime).toISOString(),
    },
    {
        text: 'Coucou toi 💚',
        sent: true,
        time: new Date(baseTime.getTime() + 30 * 60 * 1000).toISOString(), // +30min
    },
    ])

  
  const input = ref('')
  
  const sendMessage = () => {
    if (input.value.trim()) {
        const lastTime = new Date(messages.value[messages.value.length - 1]?.time ?? new Date())
        const newTime = new Date(lastTime.getTime() + 30 * 60 * 1000) // +30 min

        messages.value.push({
        text: input.value,
        sent: true,
        time: newTime.toISOString(),
        })
        input.value = ''
    } 
  }

  </script>
  
  <style scoped>
  /* Disposition générale sans scroll */
  .layout {
    display: flex;
    height: 100vh;
    background-color: #111b21;
    overflow: hidden; /* empêche le scroll global */
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
    background-color: #0b141a;
    border-left: 1px solid #2a3942;
    border-right: 1px solid #2a3942;
  }
  
  /* 🆕 En-tête de chat */
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #202c33;
    padding: 10px 15px;
    border-bottom: 1px solid #2a3942;
  }
  .contact-info span {
    font-weight: bold;
    color: white;
  }
  .actions .call-btn {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  /* Messages */
  .messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
  }
  
  /* Barre d'envoi */
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
  