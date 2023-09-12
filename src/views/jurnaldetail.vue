<template>
    <navbar
    :jurnalAlias="jurnal.alias"
    :jurnalTitle="jurnal.jurnalName"
  />

  <div class="row justify-content-center">
    <div class="col-lg-4">
      <!-- Display logo on the left -->
      <img :src="'/assets/images/' + jurnal.jurnalImages" class="img-fluid imgj" alt="Repository Logo" width="350"/>
    </div>
    <div class="col-lg-4 d-flex align-items-center">
      <!-- Display title and description on the right -->
      <div>
        <div v-if="jurnal.detailJurnal">
          <h2 class="ffss mb-4 text-white">About Journal</h2>
          <p class="fssss mb-2 text-2 text-white">{{ jurnal.detailJurnal }}</p>
        </div>
        <div v-else>
          <p class="text-white">No title or description found.</p>
        </div>
        <!-- Display the indexing information if it exists in the JSON data -->
        <h6 v-if="jurnal.indexing" class="ffss text-white">Indexing</h6>
        <div class="indexing-list mb-3" v-if="jurnal.indexing">
          <!-- Use v-for to iterate over the indexing items -->
          <div v-for="indexingItem in jurnal.indexing" :key="indexingItem.id" class="indexing-item">
            <img :src="'/assets/images/' + indexingItem.imageIdex" alt="Indexing Image" class="indexing-image" width="50"/>
          </div>
        </div>
        <div v-else>
          <p class="text-white">No indexing information found.</p>
        </div>
        <a class="btn btn-danger px-3" href="">Read More <i class="bi bi-arrow-right-short"></i></a>
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
      <img src="../assets/images/buku.png" class="img-fluid oval-image" alt="Repository Logo" width="600"/>
    </div>
  </div>

  <div class="rectangle-shape4"></div>
    <Footer />
  </template>
  
  <script>
import navbar from '@/components/navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: "jurnaldetail",
  components: {
    navbar,
    Footer,
  },
  data() {
    return {
      jurnal: {}
    };
  },
  methods: {
    setJournal(data) {
      this.jurnal = data;
      console.log(this.jurnal);
    },
  },
  mounted() {
    axios
    .get("http://localhost:3000/journal/"+this.$route.params.id)
    .then((response) => this.setJournal(response.data))
    .catch((error) => console.log(error));


      window.scrollTo(0, 0);
  },
};
</script>
  
  <style>

  body {
    position: relative; /* Make sure the body is positioned relatively */
    z-index: 1; /* Set the z-index to ensure the body is above the rectangle */
    background-color: #181818;
  }

  .component2 {
    margin-top: 120px;
    margin-bottom: 80px;
  }

  .fssss{
    font-size: 13px;
    text-align: justify;
    color: #F5F5F5;
  }

  .indexing-item {
    background-color: white;
    border-radius: 30px;
    padding: 5px;
    margin: 2px;
    display: inline-block; /* Make the div's width adjust to its content */
  }

  .imgj {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.932); /* Adjust the shadow properties as needed */
  }

  .oval-shape::after {
    content: "";
    position: absolute;
    width: 450px; /* Adjust the width of the oval shape */
    height: 40px; /* Adjust the height of the oval shape */
    background-color: #30475E4D; /* Adjust the color and opacity of the oval shape */
    border-radius: 50%;
    bottom: 540px; /* Adjust the position of the oval shape */
    left: 53%;
    transform: translateX(-20%);
    z-index: -1; /* Change z-index to -1 to place the oval shape behind the image */
  }
  </style>
  