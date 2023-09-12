<template>
    <nav id="navbar" :class="{'scrolled': scrolled}" class="navbar fixed-top navbar-expand-sm navbar-dark p-md-2">
        <div class="container">
            <a href="/" class="navbar-brand"><img src="../assets/images/logo.png" alt="NoSide" width="130"></a>
            <div class="collapse navbar-collapse">
                <div class="mx-auto"></div>
                <ul class="navbar nav">
                    <li class="nav-item">
                        <a href="/repositori" class="nav-link">REPOSITORI</a>
                    </li>
                    <li class="nav-item">
                        <a href="/jurnal" class="nav-link">JURNAL</a>
                    </li>
                    <li class="nav-item">
                        <a href="/konferensi" class="nav-link">KONFERENSI</a>
                    </li>
                    <li v-if="shouldShowCustomNav" class="nav-item dropdown" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
                      <a class="nav-link dropdown-toggle" role="button" :aria-expanded="showDropdown" @click="toggleDropdown">
                        MENU
                      </a>
                      <div class="dropdown-menu" :class="{ 'show': showDropdown }">
                        <a class="dropdown-item" href="#">Home</a>
                        <a class="dropdown-item" href="#">About</a>
                        <a class="dropdown-item" href="#">Contact</a>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  <!-- Hero section for the Repositori page -->
  <div v-if="isRepositoriPage" class="container-fluid bg-secondary py-4 mb-md-6 hero-header">
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-lg-7 pt-lg-10 mt-lg-4">
          <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">Repositori</h2>
          <p class="fss mb-4 text-white" style="text-align: left;">Search 1396 repositories from universities, NGOs, think tanks, funders and other institutions or request a repository for your institution.</p>
          <div class="input-group input-group-md heroheader2" style="text-align: left;">
            <input
            v-model="searchQueryRepositori"
            type="text"
            class="form-control"
            placeholder="Search Repositori disini"
            aria-label="Search Repositori disini"
            aria-describedby="search-button"
            @input="updateSearchQuery"
          />
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Hero section for the Jurnal page -->
  <div v-else-if="isJurnalPage" class="container-fluid bg-secondary py-4 mb-md-6 hero-header">
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-lg-7 pt-lg-10 mt-lg-4">
          <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">Jurnal</h2>
          <p class="fss mb-4 text-white" style="text-align: left;">Search 1396 Journals from universities, NGOs, think tanks, funders and other institutions or request a repository for your institution.</p>
          <div class="input-group input-group-md heroheader2" style="text-align: left;">
            <input
            v-model="searchQueryJurnal"
              type="text"
              class="form-control"
              placeholder="Search Jurnal disini"
              aria-label="Search Jurnal disini"
              aria-describedby="search-button"
              @input="updateSearchQuery"
            />
          </div>
        </div>
      </div>
    </div>
  </div>


  <div v-else-if="isKonferensiPage" class="container-fluid bg-secondary py-4 mb-md-6 hero-header">
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-lg-7 pt-lg-10 mt-lg-4">
          <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">Konferensi</h2>
          <p class="fss mb-4 text-white" style="text-align: left;">Search 1396 Conferences from universities, NGOs, think tanks, funders and other institutions or request a repository for your institution.</p>
          <div class="input-group input-group-md heroheader2" style="text-align: left;">
            <input
            v-model="searchQueryKonferensi"
              type="text"
              class="form-control"
              placeholder="Search Konferensi disini"
              aria-label="Search Konferensi disini"
              aria-describedby="search-button"
              @input="updateSearchQuery"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

 <!-- Hero section for the Repositori Detail page -->
 <div v-else-if="isRepositoriDetailPage" class="container-fluid bg-secondary py-4 mb-5" :style="heroBackgroundStyle">
  <div class="container py-5">
    <div class="row justify-content-center py-5">
      <div class="col-lg-7 pt-lg-10 mt-lg-4">
        <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">Repositori.</h2>
        <p class="titler text-white" style="text-align: left;">{{ heroTitle }}</p>
        <p class="fss mb-4 text-white" style="text-align: left;">{{ heroLokasi }}</p>
      </div>
    </div>
  </div>
</div>


 <div v-else-if="isJurnalDetailPage" class="container-fluid bg-secondary py-4 mb-5 hero-header">
  <div class="container py-5">
    <div class="row justify-content-center py-5">
      <div class="col-lg-7 pt-lg-10 mt-lg-4">
        <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">jurnal.</h2>
        <p class="titler text-white" style="text-align: left;">{{ jurnalTitle }}</p>
        <p class="fss mb-4 text-white" style="text-align: left;">{{ jurnalAlias }}</p>
      </div>
    </div>
  </div>
</div>


 <div v-else-if="isKonferensiDetailPage" class="container-fluid bg-secondary py-4 mb-5 hero-header1">
  <div class="container py-5">
    <div class="row justify-content-center py-5">
      <div class="col-lg-7 pt-lg-10 mt-lg-4">
        <h2 class="ffss mb-sm-1" style="color: #F05454; text-align: left;">konferensi.</h2>
        <p class="titler text-white" style="text-align: left;">{{ konferensiName }}</p>
        <p class="fss mb-4 text-white" style="text-align: left;">{{ konferensiDetail }}</p>
      </div>
    </div>
  </div>
</div>

  
  <!-- Hero section for other pages -->
  <div v-else class="container-fluid bg-secondary py-4 mb-5 hero-header">
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-lg-12 pt-lg-9 mt-lg-5 text-center">
          <h2 class="ffs mb-sm-3 text-white">Pengelola Repositori, Jurnal, dan Konferensi</h2>
          <p class="fss mb-2 text-white">Kelola Repositori, Jurnal, Konferensi dengan kami</p>
          <p class="fs2 mb-4 text-white">Anda sudah siap? Silahkan hubungi kami dengan menekan tombol dibawah</p>
          <a class="btn btn-danger px-3 mb-3" href="">Get Started <i class="bi bi-arrow-right-short"></i></a>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: 'Navbar',
  props: {
    heroTitle: String,
    heroLokasi: String,
    heroBackground: String,
    jurnalTitle: String,
    jurnalAlias: String,
    konferensiName: String,
    konferensiDetail: String,
  },
  data() {
    return {
      scrolled: false,
      searchQueryRepositori: '', // Define searchQueryRepositori
       searchQueryJurnal: '', // Define searchQueryJurnal
       searchQueryKonferensi: '', // Define searchQueryJurnal
       showDropdown: false,
    };
  },
  computed: {
    heroBackgroundStyle() {
      return {
        background: this.heroBackground
          ? `linear-gradient(rgba(22, 22, 22, 0.5), rgba(22, 22, 22, 0.5)), url('/assets/images/${this.heroBackground}')`
          : '',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 300px rgb(0, 0, 0, 2)',
        fontSize: '12px',
        fontWeight: 600,
      };
    },
     isRepositoriPage() {
      return this.$route.name === 'repositori';
    },
    isJurnalPage() {
      return this.$route.name === 'jurnal';
    },
    isKonferensiPage() {
      return this.$route.name === 'konferensi';
    },
    isRepositoriDetailPage() {
      return this.$route.name === 'RepositoriDetail';
    },
    isJurnalDetailPage() {
      return this.$route.name === 'JournalDetail';
    },
    isKonferensiDetailPage() {
      return this.$route.name === 'KonferensiDetail';
    },
     shouldShowCustomNav() {
      // Check if the current route matches either "repositori" or "jurnal"
      return this.$route.name === 'RepositoriDetail' || this.$route.name === 'JournalDetail' || this.$route.name === 'KonferensiDetail';
    },
    currentSearchQuery() {
    if (this.isRepositoriPage) {
      return this.searchQueryRepositori;
    } else if (this.isJurnalPage) {
      return this.searchQueryJurnal;
    } else if (this.isKonferensiPage) {
      return this.searchQueryKonferensi;
    }
    // Add more conditions for other pages if needed
    return '';
  },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    updateSearchQuery(event) {
  if (this.isRepositoriPage) {
    this.$store.commit('setSearchQueryRepositori', event.target.value);
  } else if (this.isJurnalPage) {
    this.$store.commit('setSearchQueryJurnal', event.target.value);
  } else if (this.isKonferensiPage) {
    this.$store.commit('setSearchQueryKonferensi', event.target.value);
  }
  // Add more conditions for other pages if needed
},
 toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>


<style scoped>
.scrolled {
    background-color: #1d1d1d;
    transition: background-color 0.5s, height 0.5s;
}

.scrolled.scrolled {
    height: 60px; /* Adjust the final height */
}

/* Additional styles for logo and nav items */
.navbar-brand img {
    max-width: 120px; /* Make the logo smaller */
    transition: max-width 0.5s;
}

.nav-item {
    transition: transform 0.5s;
}

.scrolled .navbar-brand img {
    max-width: 100px; /* Adjust the smaller logo size */
    transition: max-width 0.5s; /* Add transition property for consistency */
}

/* Adjust the transform property to prevent disappearing items */
.scrolled .nav-item {
    transform: translateY(0px); /* Keep the navigation items in their normal position */
    transition: transform 0.5s; /* Add transition property for consistency */
}

/* Styles for the hero section on the Repositori page */
.repositori-hero {
    background-color: #F05454; /* Background color for the hero section */
    color: #fff; /* Text color for the hero section */
  }
  
  .repositori-hero h2 {
    font-size: 28px; /* Font size for the title */
    margin-bottom: 15px; /* Bottom margin for the title */
  }
  
  .repositori-hero p {
    font-size: 16px; /* Font size for the text */
    margin-bottom: 10px; /* Bottom margin for the text */
  }
  
  .repositori-hero .form-control {
    font-size: 16px; /* Font size for the input field */
  }
  
  .repositori-hero .btn-danger {
    font-size: 18px; /* Font size for the button */
  }
  
  .heroheader2 {
    margin-bottom: 55px;
  }
  
  .titler {
    font-size: 40px;
  }

  .dropdown-menu {
   background-color: #1d1d1d;
  }

  .dropdown-menu .dropdown-item {
   color: #fff;
   margin: 4px;
   font-size: 11px;
   width: 150px;
  }

  .dropdown-menu .dropdown-item:hover {
   background-color: #f054546b;
   border-radius: 6px;

  }

  .dropdown-menu {
  display: none;
}

.nav-item:hover .dropdown-menu {
  display: block;
}
</style>