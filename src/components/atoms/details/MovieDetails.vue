<template>
  <div class="col flex" style="flex-wrap: initial; flex-direction: column">
    <div>
      <div class="flex items-center">
        <span class="text-h3">{{ movie.title }}</span>
        <q-space></q-space>
        <q-icon
          class="cursor-pointer"
          size="24px"
          color="white"
          :name="isFavoriteMovie ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"
          @click="addToFavorite(movie)"
        >
          <q-tooltip>{{ $t("additionToFavorites") }}</q-tooltip>
        </q-icon>
      </div>
      <p class="text-italic">{{ movie.tagline }}</p>
    </div>
    <div class="flex q-py-sm" style="flex-direction: column">
      <p v-for="(detailValue, detailKey) in details" :key="detailKey">
        {{ $t(detailKey) }}: {{ detailValue }}
      </p>
    </div>

    <q-space></q-space>
    <span class="text-h5">{{ $t("whatIsAbout") }} "{{ movie.title }}":</span>
    <span class="q-py-md" style="font-size: 1.3em; line-height: initial">{{
      movie.overview
    }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import stores from "stores/stores";
export default defineComponent({
  name: "movie-details",
  components: {},
  props: {
    movie: { type: Object, required: true },
  },
  setup() {
    const movieStore = stores.movies();
    return {
      movieStore,
    };
  },
  methods: {
    addToFavorite(movie) {
      if (!this.isFavoriteMovie) {
        this.movieStore.favoriteMovies.push(movie);
      } else {
        this.movieStore.favoriteMovies = this.movieStore.favoriteMovies.filter(
          (el) => el.id !== movie.id
        );
      }
    },
  },
  computed: {
    isFavoriteMovie() {
      return !!this.movieStore.favoriteMovies.filter(
        (el) => el.id === this.movie.id
      )?.[0];
    },
    details() {
      return {
        releaseDate: this.movie.release_date,
        country: this.movieStore.movieProductionCountries,
        genres: this.movieStore.movieGenres,
        runTime: `${this.movie.runtime} ${this.$t("min")}`,
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
