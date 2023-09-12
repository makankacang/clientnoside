<template>
    <div class="conference-container">
      <div class="conference-box">
        <router-link :to="'/konferensi/detail/' +konferensi.id" class="konferensi-link">
          <div class="conference-content">
            <img :src=" 'assets/images/' + konferensi.confImages " alt="Conference Image" class="conference-image" />
          </div>
        </router-link>
      </div>
      <div class="conference-info">
        <h3 class="conference-name">{{ konferensi.confName }}</h3>
        <i class="conference-abbreviation">{{ konferensi.detailConf }}</i>
      </div>
    </div>
</template>

<script>
export default {
  name: "konferensilist",
  props: ["konferensi"],
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>