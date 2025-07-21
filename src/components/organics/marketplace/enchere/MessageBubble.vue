<template>
    <div :class="['message-container', sent ? 'sent' : 'received']">
    <div class="timestamp">{{ formatTime(time) }}</div>

      <div class="bubble">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    message: String,
    sent: Boolean,
    time: String, // ISO string
  })
  
  const formatTime = (iso) => {
    const date = new Date(iso)
    return date.toLocaleString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(':', 'h ')
  }
  </script>
  
  <style scoped>
  .message-container {
    display: flex;
    margin-bottom: 8px;
  }
  
  .sent {
    justify-content: flex-end;
  }
  
  .received {
    justify-content: flex-start;
  }
  
  .bubble {
    max-width: 60%;
    padding: 10px 15px;
    border-radius: 20px;
    word-break: break-word;
    background-color: #005c4b; /* Sent */
    color: white;
  }
  
  .received .bubble {
    background-color: #202c33; /* Received */
  }

  .timestamp {
    text-align: center;
    align-items: center;
  }
  </style>
  