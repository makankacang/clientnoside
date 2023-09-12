<template>
    <div class="journal-container">
      <div class="journal-box">
        <router-link :to="'/jurnal/detail/' +jurnal.id" class="jurnal-link">
          <div class="journal-content">
            <img :src=" 'assets/images/' + jurnal.jurnalImages " alt="Journal Image" class="journal-image" />
          </div>
        </router-link>
      </div>
      <div class="journal-info">
        <h3 class="journal-name">{{ jurnal.alias }}</h3>
        <i class="journal-abbreviation">{{ jurnal.jurnalName }}</i>
      </div>
    </div>
</template>

<script>
export default {
  name: "jurnallist",
  props: ["jurnal"],
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>