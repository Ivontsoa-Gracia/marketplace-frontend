<template>
    <div :class="['bubble', sent ? 'sent' : 'received']">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
    sent: Boolean,
  })
  </script>
  
  <style scoped>
  .bubble {
    max-width: 60%;
    padding: 10px 15px;
    border-radius: 20px;
    margin-bottom: 10px;
    word-break: break-word;
  }
  .sent {
    background-color: #005c4b;
    align-self: flex-end;
    color: white;
  }
  .received {
    background-color: #202c33;
    align-self: flex-start;
    color: white;
  }
  </style>
  