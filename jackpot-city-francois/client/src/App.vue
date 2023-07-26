<script>
import Navigation from './components/Navigation.vue'
import axios from 'axios';

export default {
  components: {
    Navigation,
  },
  data() {
  return {
    content: {},
    text: '',

    };
  },
  mounted() {
    this.fetchTextContent();
  },
  methods: {
    async fetchTextContent() {
      const apiUrl = 'http://localhost:8000/' ;
      try {
        const response = await axios.get(apiUrl);
        
        this.content = response.data;
      } catch (error) {
        console.error('Error fetching text content:', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="hero">
      <Navigation></Navigation>
      <img class="hero-image" src="./assets/Hero-Image.jpg" alt="">
      <div class="text-container">
        <div class="footer-amount">
          {{ content.footerAmount }}
        </div>
        <div class="footer-bonus">
          {{ content.footerBonus }}
        </div>
        <div class="footer-signup-container">
          <div class="footer-signup">
            {{ content.footerSignup }}
          </div>
        </div>
          
      </div>
    </div>
  </div>
</template>

<style scoped>


.hero img {
  width: 100%;
}

.hero {
  height: 100%;
  position: relative;
}

.hero-image {
  position: relative;
}

.text-container {
  position: absolute;
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  bottom: 0;
}

.footer-amount {
  width: 100%;
  font-size: 140px;
  font-weight: 600;
  justify-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.91));
  padding-top: 80px;
}

.footer-bonus {
  width: 100%;
  font-size: 90px;
  font-weight: 600;
  font-family: sans-serif;
  padding-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.91);
}

.footer-signup-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.91);
  padding-bottom: 60px;
}

.footer-signup {
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(#8416ac, #5a057a);
  padding: 25px 90px;
  border-radius: 3px;
  width: 250px;
}

@media only screen and (max-width: 800px){
  .footer-amount {
    font-size: 120px;
  }
  .footer-bonus {
    font-size: 80px;
  }
  .footer-signup {
    font-size: 40px;
    padding: 15px 80px;
    width: 220px;
  }
}

@media only screen and (max-width: 750px){
  .footer-amount {
    font-size: 100px;
  }
  .footer-bonus {
    font-size: 60px;
  }
  .footer-signup {
    font-size: 30px;
    padding: 10px 60px;
    width: 200px;
  }
}

@media only screen and (max-width: 600px){
  .footer-amount {
    font-size: 80px;
  }
  .footer-bonus {
    font-size: 45px;
  }
  .footer-signup {
    font-size: 20px;
    padding: 10px 40px;
    width: 160px;
  }
  .footer-signup-container {
    padding-bottom: 50px;
  }
}

@media only screen and (max-width: 450px){
  .footer-amount {
    font-size: 65px;
  }
  .footer-bonus {
    font-size: 40px;
  }
  .footer-signup {
    font-size: 15px;
    padding: 10px 20px;
    width: 150px;
  }
}

@media only screen and (max-width: 400px){
  .footer-amount {
    font-size: 50px;
  }
  .footer-bonus {
    font-size: 30px;
  }
  .footer-signup {
    font-size: 13px;
    padding: 10px 15px;
    width: 130px;
  }
}
</style>
