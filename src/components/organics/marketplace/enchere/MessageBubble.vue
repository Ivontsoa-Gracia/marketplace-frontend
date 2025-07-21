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
            <button @click="$emit('accept-offer')" class="icon-btn accept" title="Accepter">
              <!-- Icône check -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>

            <button @click="$emit('decline-offer')" class="icon-btn decline" title="Refuser">
              <!-- Icône croix -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <button @click="$emit('propose-again')" class="icon-btn propose" title="Proposer une autre offre">
              <!-- Icône redo / refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
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
  width: 22px;
  height: 22px;
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
  font-weight: 500;
}

.received .bubble {
  background-color: #202c33;
}

.offer-card {
  max-width: 320px;
  padding: 14px 18px;
  border-radius: 12px;
  color: #e0e0e0;
  background: rgba(40, 50, 60, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
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
  gap: 12px;
  justify-content: flex-end;
}

.icon-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Perspective pour l'effet 3D */
  perspective: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-btn svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  transition: stroke 0.3s ease;
}

/* Animation 3D au hover */
.icon-btn:hover {
  transform: rotateX(15deg) rotateY(15deg) scale(1.1);
  box-shadow: 0 8px 12px rgba(0, 255, 150, 0.5);
}

/* Couleurs selon action */
.accept {
  color: #25d366;
}

.accept:hover {
  box-shadow: 0 8px 15px rgba(37, 211, 102, 0.7);
}

.decline {
  color: #dc3545;
}

.decline:hover {
  box-shadow: 0 8px 15px rgba(220, 53, 69, 0.7);
}

.propose {
  color: #f0ad4e;
}

.propose:hover {
  box-shadow: 0 8px 15px rgba(240, 173, 78, 0.7);
}

/* Statut offre */
.offer-status {
  font-weight: 600;
  padding: 8px;
  text-align: center;
  border-radius: 8px;
  color: white;
}

.accepted {
  background-color: #25d366;
}

.declined {
  background-color: #dc3545;
}

</style>
