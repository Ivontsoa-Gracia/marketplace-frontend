<template>
 <div class="add-product-container">
    <h2>Add Products</h2>
    <AButton
            backgroundColor="#2DCC70"
            value="Add Products"
            width="150"
            height="40"
            borderRadius="6px"
            borderWidth="0px"
            textColor="#fefefe"
            iconUrl="/icon SVG/cart.svg"
            fontFamily="Poppins"
            class="popup-button"
          />
 </div>
</template>

<script>
import AButton from '../atomes/AButton.vue';

export default {
    components: {
        AButton,
    },
}
</script>

<style scoped>
</style>