<template>
  <div>
    <navbar />
    <!-- List Repositori section -->
    <div class="list-repositori-section">
      <h2 class="list-repositori-title text-white">List Repositori</h2>
      <div v-for="(repositori, index) in paginatedRepositories" :key="repositori.id">
        <list :repositori="repositori" />
      </div>
      <div class="pagination">
        <button
          @click="goToPage(page)"
          v-for="page in displayedPages"
          :key="page"
          :class="{
            'page-button': page !== 'Next' && page !== 'Previous',
            'next-button': page === 'Next',
            'prev-button': page === 'Previous',
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
import List from '@/components/repositorilist.vue';
import axios from "axios";

export default {
  name: 'repositori',
  components: {
    Navbar,
    Footer,
    List,
  },
  data() {
    return {
      repositories: [],
      currentPage: 1,
      itemsPerPage: 7, 
      transitionDirection: 'none',
    };
  },
  computed: {
    filteredRepositories() {
    const searchQuery = this.$store.state.searchQueryRepositori;
    if (searchQuery) {
      return this.repositories.filter((repo) =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.lokasi.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return this.repositories; // Return all repositories if searchQuery is undefined or empty
  },
    totalPages() {
      return Math.ceil(this.filteredRepositories.length / this.itemsPerPage);
    },
    paginatedRepositories() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredRepositories.slice(start, end);
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
  methods: {
    setRepositories(data) {
      this.repositories = data;
    },
    goToPage(page) {
      if (page === 'Next') {
        this.nextPage();
      } else if (page === 'Previous') {
        this.prevPage();
      } else if (page !== this.currentPage) {
        // Apply animation only if the page is different from the current page and displayed
        this.transitionDirection = page > this.currentPage ? 'right' : 'left';
        this.currentPage = page;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.transitionDirection = 'right';
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.transitionDirection = 'left';
        this.currentPage--;
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/repositories")
      .then((response) => this.setRepositories(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

  
  <style>

  body {
    position: relative; /* Make sure the body is positioned relatively */
    z-index: 1; /* Set the z-index to ensure the body is above the rectangle */
    background-color: #181818;
  }

  .list-repositori-section {
    text-align: center;
    padding: 50px 0;
  }
  
  .list-repositori-title {
    font-size: 28px;
    color: #F05454;
    margin-bottom: 30px;
    font-weight: 800;
  }
  
  .repository-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .repository-link {
    text-decoration: none; /* Remove the underline from links */
    color: inherit; /* Use the inherited color for links */
  }

  .repository-item {
    background-color: #121212;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 5px rgb(48, 48, 48);
    margin: 10px;
    width: 850px;
    text-align: left;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  }

  /* Add hover effect */
.repository-item:hover {
  background-color: #262626;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  color: #F05454;
}
  
  .repository-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  .repository-info {
    flex: 1;
  }
  
  .repository-name {
    font-weight: bold;
    margin: 0;
    color: #F05454;
  }
  
  .repository-description {
    margin: 5px 0;
    font-size: 14px;
    color: #777;
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

.next-button:before {
  content: 'Next'; /* Display "Next" text before the button */
}

.prev-button:before {
  content: 'Previous'; /* Display "Previous" text before the button */
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
  