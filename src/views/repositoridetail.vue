<template>
  <div>
    <navbar
    :hero-title="repositori.name"
    :hero-lokasi="repositori.lokasi"
    :heroBackground="repositori.background"
  />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <!-- Display logo on the left -->
          <img :src="'/assets/images/' + repositori.logo" class="img-fluid" alt="Repository Logo" width="350"/>
        </div>
        <div class="col-lg-4 d-flex align-items-center">
          <!-- Display title and description on the right -->
          <div>
            <h2 class="ffss mb-4" style="color: #F05454;">About Us</h2>
            <p class="fssss mb-3 text-1 text-white">{{ repositori.description }}</p>
            <a class="btn btn-danger px-3" href="">Read More <i class="bi bi-arrow-right-short"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-lg-6 component2 justify-content-center"> <!-- Add justify-content-center class to center the second row -->
      <div class="col-lg-3 d-flex align-items-center">
        <!-- Display title and description on the right -->
        <div>
          <h2 class="ffss mb-1 text-white">Submit Artikel</h2>
          <p class="fssss mb-5 text-1 text-white">Submit artikel anda di jurnal kampus kami</p>
          <a class="btn btn-danger px-3" href="">Mulai <i class="bi bi-arrow-right-short"></i></a>
        </div>
      </div>
      <div class="col-lg-4 text-center">
        <!-- Display logo on the left -->
          <div class="oval-shape"></div>
        <img src="../assets/images/bukulaptop.png" class="img-fluid oval-image" alt="Repository Logo" width="600"/>
      </div>
    </div>

       <!-- Article Details Section -->
       <h2 class="artikel-title text-white">Artikel Jurnal</h2>

         <!-- Highlighted Article (Big) -->
<div class="card-container" v-if="repositori.article && repositori.article.length > 0">
  <div class="card-left">
    <div class="card-image"></div>
  </div>
  <div class="card-right">
    <h4 class="ffss mb-3" style="color: #F05454;">{{ repositori.article[0].title }}</h4>
    <p class="fssss mb-2" style="color: #F05454;">{{ repositori.article[0].date }}</p>
    <p class="fssss card-description mb-2">By {{ repositori.article[0].author.join(', ') }}</p>
    <p class="card-description">{{ repositori.article[0].desc }}</p>
    <a class="btn btn-danger px-3" href="#">VIEW MORE</a>
  </div>
</div>

<!-- Child Articles (Smaller) -->
<div class="child-card" v-if="repositori.article && repositori.article.length > 1">
  <div v-for="(article, index) in repositori.article.slice(1)" :key="index" class="card">
    <img :src="'/assets/images/' + article.articleImages" class="card-img-top" alt="Child Card Image">
    <div class="card-body">
      <p class="fssss mb-2 card-description">{{ article.date }}</p>
      <p class="fssss card-description mb-2">By {{ article.author.join(', ') }}</p>
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">{{ article.desc }}</p>
    </div>
  </div>
</div>

   
       <div class="text-right">
         <a class="btn btn-danger ffss" href="#">Artikel Jurnal Lainnya</a>
       </div>


    <div class="rectangle-shape4"></div>
    
    <Footer />
  </div>
</template>




<script>
import navbar from '@/components/navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: "repositoridetail",
  components: {
    navbar,
    Footer,
  },
  data() {
    return {
      repositori: {}
    };
  },
  methods: {
    setRepositories(data) {
      this.repositori = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/repositories/" + this.$route.params.id)
      .then((response) => this.setRepositories(response.data))
      .catch((error) => console.log(error));
      
      window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
body {
  position: relative; /* Make sure the body is positioned relatively */
  z-index: 1; /* Set the z-index to ensure the body is above the rectangle */
  background-color: #181818;
}

.fssss{
  font-size: 14px;
  text-align: justify;
}

.component2 {
  margin-top: 120px;
}

.card-container {
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 50px;
  background-color: #121212;
  border-radius: 15px;
  box-shadow: 0px 4px 5px rgb(48, 48, 48);
}

.card-left {
  flex: 1.4;
  border-radius: 15px 0 0 15px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/perpus.jpg');
  background-size: cover;
  background-position: center;
}

.card-right {
  flex: 1;
  padding: 20px;
}

.card-title {
  font-size: 19px;
  color: #F05454;
}

.card-description {
  text-align: justify;
  font-size: 11px;
  color: #DCDCDC;
}

.child-card {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: 90px;
  margin-right: 90px;
}

.child-card .card {
  width: 100%;
  max-width: 220px; /* Adjust the width as needed */
  background-color: #121212;
  border-radius: 15px;
  box-shadow: 0px 4px 5px rgb(48, 48, 48);
  text-align: left;
  margin: 8px;
}

.child-card .card-img-top {
  border-radius: 15px 15px 0 0;
}

.child-card .card-title {
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
}

.child-card .card-text {
  text-align: left;
  font-size: 10px;
  color: #777;
}

.child-card .btn-danger {
  background-color: #F05454;
  border-color: #F05454;
  margin-bottom: 10px;
}

.artikel-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-top: 80px;
}

.text-right {
  text-align: right;
  margin-top: 20px; /* Adjust as needed */
  margin-right: 80px;
  margin-bottom: 80px;
}

.image-container4 {
  position: relative;
}

.oval-shape::after {
  content: "";
  position: absolute;
  width: 450px; /* Adjust the width of the oval shape */
  height: 40px; /* Adjust the height of the oval shape */
  background-color: #30475E4D; /* Adjust the color and opacity of the oval shape */
  border-radius: 50%;
  bottom: 1270px; /* Adjust the position of the oval shape */
  left: 53%;
  transform: translateX(-20%);
  z-index: -1; /* Change z-index to -1 to place the oval shape behind the image */
}
</style>
