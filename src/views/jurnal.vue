<template>
  <div>
    <navbar />
    <!-- List Jurnal section -->
    <div class="list-jurnal-section">
      <h2 class="list-jurnal-title text-white">List Jurnal</h2>
      <div class="journal-list-container">
        <jurnallist
          v-for="jurnal in filteredJournals"
          :key="jurnal.id"
          :jurnal="jurnal"
          class="journal-container"
        />
      </div>
      <div class="pagination">
        <button
          @click="page !== '>' ? goToPage(page) : null"
          v-for="page in displayedPages"
          :key="page"
          :class="{
            'page-button': page !== '>',
            'next-button': page === '>',
            'fade-in-right': transitionDirection === 'right',
            'fade-in-left': transitionDirection === 'left',
            'active-page-button': page === currentPage,
          }"
        >
          {{ page }}
        </button>
      </div>
    </div>

    

    <div class="rectangle-shape4"></div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/Footer.vue';
import jurnallist from '@/components/jurnallist.vue';
import axios from "axios";

export default {
  name: 'jurnal',
  components: {
    Navbar,
    Footer,
    jurnallist,
  },
  computed: {
    filteredJournals() {
  const searchQuery = this.$store.state.searchQueryJurnal;
  if (searchQuery) {
    return this.journal.filter((jurnal) =>
      jurnal.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
      jurnal.jurnalName.toLowerCase().includes(searchQuery.toLowerCase())
      // ^ Use 'jurnalName' to access the 'jurnalName' property
    );
  }
  return this.journal; // Return all journals if searchQuery is undefined or empty
},


},
  data() {
    return {
      journal: [],
      currentPage: 1,         // Current page number
      itemsPerPage: 12,       // Number of items per page
      transitionDirection: 'none',
    };
  },
  methods: {
    setJournal(data) {
      this.journal = data;
    },
    goToPage(page) {
    if (page === '>') {
      return; // Do nothing if the ">" button is clicked
    }

    this.transitionDirection = page > this.currentPage ? 'right' : 'left';
    this.currentPage = page;
  },
  },
  computed: {
  filteredJournals() {
    const searchQuery = this.$store.state.searchQueryJurnal;
    let filteredData = this.journal;

    if (searchQuery) {
      filteredData = filteredData.filter((jurnal) =>
        jurnal.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
        jurnal.jurnalName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return filteredData.slice(start, end);
  },

  totalPages() {
    const searchQuery = this.$store.state.searchQueryJurnal;
    const filteredData = searchQuery
      ? this.journal.filter((jurnal) =>
          jurnal.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
          jurnal.jurnalName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : this.journal;

    return Math.ceil(filteredData.length / this.itemsPerPage);
  },

  displayedPages() {
    const totalDisplayPages = 10; // Number of pages to display before showing ">"
    const halfDisplay = Math.floor(totalDisplayPages / 2);

    const startPage = Math.max(this.currentPage - halfDisplay, 1);
    const endPage = Math.min(startPage + totalDisplayPages - 1, this.totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < this.totalPages) {
      pages.push(">"); // Add ">" to indicate more pages
    }

    return pages;
  },
},

  mounted() {
    axios
      .get("http://localhost:3000/journal")
      .then((response) => this.setJournal(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
body {
position: relative;
z-index: 1;
background-color: #181818;
}

.list-jurnal-section {
text-align: center;
padding: 50px 0;
}

.list-jurnal-title {
font-size: 28px;
margin-bottom: 50px;
font-weight: 800;
}

.journal-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 250px;
  padding-right: 250px;
}

.journal-container {
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.jurnal-link {
  text-decoration: none;
  color: inherit;
}
.journal-box {
background: linear-gradient(to bottom, #f0545411, #30475e49); /* Gradient background */
border-radius: 15px;
padding: 20px;
width: 200px;
height: 200px;
margin: 0 auto;
position: relative;
overflow: hidden;
transition: transform 0.3s, Background 0.3s;
}

.journal-content {
display: flex;
flex-direction: column;
justify-content: center; /* Center vertically */
align-items: center; /* Center horizontally */
height: 100%; /* Occupy full height of the parent */
}

.journal-image {
display: block;
max-width: 85%;
max-height: 85%; /* Limit the height of the image */
width: auto;
height: auto;
}

.journal-container {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
}

.journal-info {
text-align: left;
color: #fff;
padding: 20px;
width: 240px;
margin: 0 auto;
position: relative;
overflow: hidden;
}

.journal-name {
color: #F05454;
font-size: 20px;
}

.journal-abbreviation {
color: #FBF4F4F2;
font-size: 10px;
}

.journal-list {
display: flex;
flex-wrap: wrap;
justify-content: center;
}

.journal-box:hover {
  transform: scale(1.05); /* Slightly scale up the item on hover */
  background: linear-gradient(to bottom, #e98e8e11, #3f4e5e49) !important; /* Add the !important flag if needed */
}


.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.page-button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.page-button:hover {
  background-color: #D94E4E;
}

.active-page-button {
background-color: #f05454; /* Background color for active page */
color: white;
}

/* Style for non-active pagination buttons */
.page-button:not(.active-page-button):hover {
background-color: white; /* Background color for non-active buttons on hover */
color: #f05454;
}

.next-button {
  background-color: transparent;
  color: #F05454;
  border: none;
  cursor: not-allowed;
}

.fade-in-right {
  animation: fade-in-right 0.3s ease-in-out;
}

.fade-in-left {
  animation: fade-in-left 0.3s ease-in-out;
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

