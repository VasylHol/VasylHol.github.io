<template>
  <q-select
    dark
    use-input
    dense
    standout
    hide-dropdown-icon
    @input-value="setModel"
    virtual-scroll-slice-size="5"
    popup-content-class="search-bar"
    spinner-color="primary"
    :options="moviesOptions"
    fill-input
    hide-selected
    :model-value="search"
    :label="$t('searchText')"
    class="q-ml-md search-bar"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
    <template v-slot:no-option>
      <q-item v-if="!isSearchEmpty">
        <q-item-section class="text-grey">
          {{ $t("emptySearch") }}
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:option="props">
      <search-movie-card
        :item="props.opt"
        @go-to-movie="goToMoviePage"
      ></search-movie-card>
    </template>
  </q-select>
</template>

<script>
import { defineComponent } from "vue";

import SearchMovieCard from "components/atoms/SearchMovieCard.vue";
import stores from "stores/stores";
export default defineComponent({
  name: "movie-searchbar",
  components: {
    SearchMovieCard,
  },
  setup() {
    const moviesStore = stores.movies();
    return {
      moviesStore,
    };
  },
  data() {
    return {
      search: "",
      movies: [],
      timer: null,
    };
  },
  computed: {
    isSearchEmpty() {
      return this.search === "";
    },
    moviesOptions() {
      return this.moviesStore.searchMovies;
    },
  },
  methods: {
    goToMoviePage(movieData) {
      this.search = "";
      this.$router.push({ name: "movie", params: { id: movieData.id } });
    },

    setModel(val) {
      clearTimeout(this.timer);
      this.search = val;
      this.timer = setTimeout(() => {
        if (val !== "") {
          this.moviesStore.FETCH_MOVIE_BY_NAME(val);
        }
      }, 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
.search-bar {
  width: 500px;
}
</style>
