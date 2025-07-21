<template>
  <div :class="['message-container', sent ? 'sent' : 'received']">
    <!-- Profil affiché uniquement si message reçu -->
    <img v-if="!sent && profileImage" :src="profileImage" alt="Profil" class="profile-pic" />

    <div class="message-content" :class="{ offer: isOffer }">
      <div class="timestamp">{{ formatTime(time) }}</div>

      <template v-if="isOffer">
        <div class="offer-card">
          <div class="offer-text">{{ message }}</div>

          <div v-if="offerAccepted === null" class="offer-actions">
            <button @click="$emit('accept-offer')" class="btn accept">✅ Accepter</button>
            <button @click="$emit('decline-offer')" class="btn decline">❌ Refuser</button>
            <button @click="$emit('propose-again')" class="btn propose">🔄 Proposer une autre offre</button>
          </div>

          <div v-else class="offer-status" :class="{ accepted: offerAccepted, declined: !offerAccepted }">
            Offre {{ offerAccepted ? 'acceptée' : 'refusée' }}
          </div>
        </div>
      </template>

      <template v-else>
        <div class="bubble">{{ message }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
  sent: Boolean,
  time: String,
  profileImage: String,
  isOffer: Boolean,
  offerAccepted: [Boolean, null]
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
  margin-bottom: 12px;
}

.sent {
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.profile-pic {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
}

.message-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.received .message-content {
  align-items: flex-start;
}

.timestamp {
  font-size: 0.75rem;
  color: #aaa;
  margin-bottom: 6px;
}

/* Bulle classique */
.bubble {
  max-width: 90%;
  padding: 10px 15px;
  border-radius: 20px;
  word-break: break-word;
  background-color: #005c4b;
  color: white;
}

.received .bubble {
  background-color: #202c33;
}

/* Carte offre */
.offer-card {
  max-width: 320px;
  background: #2a3942;
  border-radius: 12px;
  padding: 12px 16px;
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  font-weight: 600;
  word-break: break-word;
}

.offer-text {
  white-space: pre-line;
  margin-bottom: 12px;
  font-size: 1rem;
}

.offer-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.accept {
  background-color: #25d366;
  color: white;
}

.accept:hover {
  background-color: #1ebe58;
}

.decline {
  background-color: #dc3545;
  color: white;
}

.decline:hover {
  background-color: #b82a3b;
}

.propose {
  background-color: #f0ad4e;
  color: black;
}

.propose:hover {
  background-color: #d49930;
}

/* Statut offre */
.offer-status {
  font-weight: 600;
  padding: 8px;
  text-align: center;
  border-radius: 8px;
}

.accepted {
  background-color: #25d366;
  color: white;
}

.declined {
  background-color: #dc3545;
  color: white;
}
</style>
