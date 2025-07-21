<template>
    <div :class="['message-container', sent ? 'sent' : 'received']">
      <div class="bubble">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
    sent: Boolean,
  })
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
  </style>
  