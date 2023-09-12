// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      searchQueryRepositori: '', // Initial search query for Repositori
      searchQueryJurnal: '', // Initial search query for Jurnal
      searchQueryKonferensi: '', // Initial search query for Jurnal
    };
  },
  mutations: {
    setSearchQueryRepositori(state, query) {
      state.searchQueryRepositori = query;
    },
    setSearchQueryJurnal(state, query) {
      state.searchQueryJurnal = query;
    },
    setSearchQueryKonferensi(state, query) {
      state.searchQueryKonferensi = query;
    },
  },
});

export default store;
