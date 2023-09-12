<template>
    <div class="repository-list">
        <!-- Generate repositories based on active page -->
        <router-link :to="'/repositori/detail/' +repositori.id" class="repository-link">
            <div class="repository-item">
              <img :src=" '../assets/images/' + repositori.logo " class="repository-logo" alt="Repository Logo" />
              <div class="repository-info">
                <p class="repository-name">{{ repositori.name }}</p>
                <p class="repository-description text-white">Universitas di {{ repositori.lokasi }}</p>
              </div>
            </div>
            </router-link>
      </div>
</template>

<script>
export default {
    name: 'list',
    props: ['repositori'],
  data() {
    return {
      
    };
  },
};
</script>


<style>
  
.repository-link {
  text-decoration: none; /* Remove the underline from links */
  color: inherit; /* Use the inherited color for links */
}


</style>