<script>
import axios from 'axios';

export default {
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
  <nav>
    <div class="navigation-container">
      <div class="navigation-left">
        <a href="/">
          <img src="src/assets/JC_Logo_Col_Dark_300.png" alt="">
        </a>
      </div>
      <div class="navigation-right">
        <div class="nav-right-button" href="">
          <div class="register-button">
            {{ content.registerButton }}
          </div> 
        </div>
        <div>
          <div class="profile-button">
            <img src="src/assets/user-circle.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>



<style>
nav {
  height: 120px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  position: absolute;
  z-index: 1;
}
nav:hover {
  background-color: #000;
}

.navigation-container {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 100%;
}

.navigation-left {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.navigation-right {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.nav-right-button {
  padding-right: 30px;
}

.register-button {
  background-image: linear-gradient(#8416ac, #5a057a);
  color: #fff;
  padding: 10px 35px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
}

@media only screen and (max-width: 1000px) {
  nav {
    height: 100px;
  }
  .navigation-left img {
    width: 200px;
  }
}

@media only screen and (max-width: 800px) {
  nav {
    height: 80px;
  }
  .navigation-container {
    padding: 0 25px;
  }
  .navigation-left img {
    width: 150px;
  }
  .register-button {
    font-size: 14px;
    padding: 8px 32px;
  }
  .profile-button img {
    width: 33px;
  }
}

@media only screen and (max-width: 600px){
  .navigation-left img {
    width: 120px;
  }
  .register-button {
    font-size: 12px;
    padding: 6px 28px;
  }
  .profile-button img {
    width: 28px;
  }
}

@media only screen and (max-width: 450px){
  nav {
    height: 70px;
  }
  .navigation-left img {
    width: 100px;
  }
  .register-button {
    font-size: 10px;
    padding: 5px 25px;
  }
  .profile-button img {
    width: 22px;
  }
}
</style>