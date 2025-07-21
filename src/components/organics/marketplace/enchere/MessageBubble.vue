<template>
  <div :class="['message-container', sent ? 'sent' : 'received']">
    <!-- Image de profil -->
    <img
      class="profile-pic"
      :src="profileUrl"
      alt="Profil"
    />

    <!-- Contenu du message -->
    <div class="message-content">
      <div class="timestamp">{{ formatTime(time) }}</div>
      <div class="bubble">{{ message }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  sent: Boolean,         // true si c'est l'utilisateur qui envoie
  time: String,          // date au format ISO
  profileUrl: String     // chemin vers l'image de profil
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
  align-items: flex-end;
  margin: 10px 0;
  max-width: 100%;
}

.sent {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.profile-pic {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 10px;
}

.message-content {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.timestamp {
  font-size: 0.7rem;
  color: #999;
  margin-bottom: 4px;
}

.bubble {
  padding: 12px 16px;
  border-radius: 18px;
  background-color: #005c4b;
  color: white;
  word-wrap: break-word;
}

.received .bubble {
  background-color: #2a2f32;
}
</style>
