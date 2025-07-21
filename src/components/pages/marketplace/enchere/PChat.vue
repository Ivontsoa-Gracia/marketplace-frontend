<template>
  <div class="layout">
    <MSidebar />

    <div class="chat">
      <!-- En-tête du chat -->
      <div class="chat-header">
        <div class="contact-info">
          <span>{{ contactName }}</span>
          <span class="status">{{ negotiationStatus }}</span>
        </div>
        <div class="actions">
          <button class="call-btn" title="Appel vocal">
            <!-- Icône téléphone -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#25d366" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.22a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.68 1 1 0 0 1-.21 1.11z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div class="messages">
        <MessageBubble
          v-for="(msg, i) in messages"
          :key="i"
          :message="msg.text"
          :sent="msg.sent"
          :time="msg.time"
          :profileImage="msg.profileImage"
          :isOffer="msg.isOffer"
          :offerAccepted="msg.offerAccepted"
          @accept-offer="acceptOffer(i)"
          @decline-offer="declineOffer(i)"
          @propose-again="proposeAgain(i)"
        />

      </div>

      <!-- Barre d'envoi -->
      <div class="input-bar">
        <input v-model="input" placeholder="Tape un message..." @keyup.enter="sendMessage" />
        <button @click="sendMessage" class="send-btn" title="Envoyer">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
            <path d="M3.4,20.4l19.3-8.2c0.6-0.3,0.6-1.1,0-1.4L3.4,2.6C2.8,2.3,2.1,2.8,2.3,3.4l2.5,7.4c0.1,0.3,0.3,0.5,0.6,0.6l9.2,1l-9.2,1c-0.3,0-0.5,0.2-0.6,0.6L2.3,19.6C2.1,20.2,2.8,20.7,3.4,20.4z"/>
          </svg>
        </button>
        <button @click="toggleOfferForm" class="icon-btn propose" title="Proposer une offre" aria-label="Proposer une offre">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 12v6a2 2 0 0 1-2 2h-6l-8-8 8-8h6a2 2 0 0 1 2 2v6z"/>
            <circle cx="16" cy="8" r="1"/>
          </svg>
        </button>


      </div>

      <!-- Formulaire d'offre -->
      <div v-if="showOfferForm" class="offer-form">
        <input type="number" v-model="offerPrice" placeholder="Prix proposé (€)" />
        <textarea v-model="offerNote" placeholder="Votre message d'accompagnement..." />
        <button @click="proposerOffre">Envoyer l'offre</button>
      </div>
    </div>

    <Annonce :status="negotiationStatus" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MessageBubble from '../../../organics/marketplace/enchere/MessageBubble.vue'
import MSidebar from '../../../molecules/marketplace/enchere/MSidebar.vue'
import Annonce from '../../../organics/marketplace/enchere/Annonce.vue'

const input = ref('')
const offerPrice = ref('')
const offerNote = ref('')
const showOfferForm = ref(false)
const contactName = 'Jean Dupuis'
const negotiationStatus = ref('Négociation en cours')

const baseTime = new Date()
const messages = ref([
  {
    text: 'Salut !',
    sent: false,
    time: baseTime.toISOString(),
    profileImage: '/images/profil.jpeg',
  },
  {
    text: 'Coucou toi 💚',
    sent: true,
    time: new Date(baseTime.getTime() + 30 * 60 * 1000).toISOString(),
    profileImage: '',
  }
])

const toggleOfferForm = () => {
  showOfferForm.value = !showOfferForm.value
}

const sendMessage = () => {
  if (input.value.trim()) {
    const lastTime = new Date(messages.value.at(-1)?.time ?? new Date())
    const newTime = new Date(lastTime.getTime() + 30 * 60 * 1000)
    messages.value.push({
      text: input.value,
      sent: true,
      time: newTime.toISOString(),
      profileImage: '',
    })
    input.value = ''
  }
}

const proposerOffre = () => {
  if (!offerPrice.value) return

  const lastTime = new Date(messages.value.at(-1)?.time ?? new Date())
  const newTime = new Date(lastTime.getTime() + 30 * 60 * 1000)

  messages.value.push({
    text: `Offre proposée : ${offerPrice.value}€\n${offerNote.value}`,
    sent: true,
    time: newTime.toISOString(),
    profileImage: '',
    isOffer: true,
    offerAccepted: null,
  })

  offerPrice.value = ''
  offerNote.value = ''
  showOfferForm.value = false
}

const acceptOffer = (index) => {
  if (!messages.value[index].isOffer) return

  messages.value[index].offerAccepted = true
  checkIfBothAccepted()
}

const declineOffer = (index) => {
  if (!messages.value[index].isOffer) return

  messages.value[index].offerAccepted = false
}

const proposeAgain = (index) => {
  // Affiche le formulaire offre pour refaire une proposition
  showOfferForm.value = true
}

const checkIfBothAccepted = () => {
  // Exemple simple : si utilisateur et contact ont accepté, termine la négociation
  const lastOffer = messages.value.slice().reverse().find(m => m.isOffer)
  if (lastOffer && lastOffer.sent && lastOffer.offerAccepted === true) {
    // simuler que le contact accepte aussi
    messages.value.push({
      text: `L'offre a été acceptée !`,
      sent: false,
      time: new Date().toISOString(),
      profileImage: '/images/profil.jpeg',
    })
    negotiationStatus.value = 'Négociation terminée'
  }
}

</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
  background-color: #111b21;
  overflow: hidden;
}

.chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #0b141a;
  border-left: 1px solid #2a3942;
  border-right: 1px solid #2a3942;
}

/* Header */
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #202c33;
  padding: 10px 15px;
  border-bottom: 1px solid #2a3942;
}

.contact-info {
  display: flex;
  flex-direction: column;
  color: white;
}

.status {
  font-size: 0.8rem;
  color: #25d366;
}

/* Messages */
.messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

/* Input */
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

.send-btn, .offer-btn {
  margin-left: 8px;
  background-color: #25d366;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.offer-btn {
  background-color: #f0ad4e;
}

/* Formulaire offre */
.offer-form {
  background-color: #1e2c33;
  padding: 10px;
  border-top: 1px solid #2a3942;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.offer-form input, .offer-form textarea {
  background-color: #2a3942;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 5px;
}

.offer-form button {
  align-self: flex-end;
  background-color: #25d366;
  border: none;
  padding: 8px 12px;
  color: white;
  border-radius: 5px;
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

.icon-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  color: #f0ad4e; /* couleur or orangé */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  perspective: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-btn svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  transition: stroke 0.3s ease;
}

.icon-btn:hover {
  transform: rotateX(15deg) rotateY(15deg) scale(1.1);
  box-shadow: 0 8px 12px rgba(240, 173, 78, 0.7);
  color: #d49930;
}

</style>
