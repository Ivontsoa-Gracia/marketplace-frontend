<template>
    <div :class="['message-container', sent ? 'sent' : 'received']">
      <div class="bubble">
        {{ message }}
      </div>
      <div class="timestamp">{{ formatTime(time) }}</div>
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
    flex-direction: column;
    margin-bottom: 12px;
    max-width: 70%;
  }
  
  .sent {
    align-self: flex-end;
  }
  
  .received {
    align-self: flex-start;
  }
  
  .bubble {
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #005c4b;
    color: white;
    word-break: break-word;
  }
  
  .received .bubble {
    background-color: #202c33;
  }
  
  .timestamp {
    font-size: 0.75rem;
    color: #a0a0a0;
    margin-top: 5px;
    padding: 0 8px;
  }
  </style>
  