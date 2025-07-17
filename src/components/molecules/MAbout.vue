<template>
    <div class="about-container">
        <H1>Why Choose Our Marketplace?</H1>
        <p>Buy and sell spices, crops, and products directly with farmers, cooperatives, businesses around the world</p>

        <div class="card-about-container">
            <div class="card-about">
                <AImage
                    url="/icon SVG/access network icon.svg"
                    class="image"
                    width="15%"
                    height=""
                    borderRadius="4px"
                />
                <AText
                    contenu="Access to a Wide Network"
                    fontSize="20px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
                <AText
                    contenu="Connect directly with producers, cooperatives, businesses, and individuals, no geographic limits."
                    fontSize="15px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
            </div>
            <div class="card-about">
                <AImage
                    url="/icon SVG/fair trade icon.svg"
                    class="image"
                    width="15%"
                    height=""
                    borderRadius="4px"
                />
                <AText
                    contenu="Transparent & Fair Trade"
                    fontSize="20px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
                <AText
                    contenu="Compare prices, product quality, and offers in a competitive and open environment."
                    fontSize="15px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
            </div>
            <div class="card-about">
                <AImage
                    url="/icon SVG/Fewer Intermediaries icon.svg"
                    class="image"
                    width="15%"
                    height=""
                    borderRadius="4px"
                />
                <AText
                    contenu="Fewer Intermediaries, Lower Costs"
                    fontSize="20px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
                <AText
                    contenu="Buy and sell directly. Better margins for sellers, better prices for buyers."
                    fontSize="15px"
                    textColor="#fcffff"
                    fontWeight="500"
                    fontFamily="Poppins"
                />
            </div>
        </div>
        <div class="footer-image">
            <AImage
                url="/images/footer-image.jpg"
                class="footer-img"
                width="100%"
                height="350px"
                borderRadius="4px"
            />
            <div class="blur-layer"></div>
        </div>

    </div>
</template>

<script>
import AText from '../atomes/AText.vue';
import AButton from '../atomes/AButton.vue';
import AImage from '../atomes/AImage.vue';

export default {
  components: {
    AText,
    AButton,
    AImage,
  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

.about-container {
    background-color: rgb(249, 255, 251);
    width: 100%;
    padding: 20px 40px;
    align-items: center;
    box-sizing: border-box;
    max-width: 100vw;
    font-family: 'Poppins', sans-serif;
}

.about-container h1, 
.about-container p {
    text-align: center;

}

.card-about-container {
    background-color: #2DCC70;
    width: 100%;
    height: 250px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; 
    padding: 20px; 
    box-sizing: border-box; 
    justify-content: center;
}

.card-about {
    display: flex; 
    flex-direction: column;
    align-items: center;    
    position: relative;     
    height: 100%;
    padding: 10px;
}

.card-about:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: white;
}
.footer-image {
    margin-top: 120px;
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 4px;
    overflow: hidden;
}

.footer-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}

.blur-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    background-color: rgba(52, 212, 172, 0.3); 
    z-index: 2;
    pointer-events: none; 
    border-radius: 4px;
}


</style>