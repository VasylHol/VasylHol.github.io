<template>
  <div class="row items-center justify-center" ref="scrollComponent">
    <q-card
      v-for="movie in moviesList"
      :key="movie.id"
      class="item text-dark cursor-pointer"
      style="flex-direction: column"
      @click="goToMovie(movie)"
    >
      <div class="flex items-center justify-center">
        <q-img :src="imagePath(movie.poster_path)" height="350px" width="250px">
          <div class="absolute-bottom text-subtitle2">
            <p>
              {{ movie.title }}
            </p>
          </div>
          <div class="absolute-top-right" style="background: transparent">
            <span
              class="text-dark"
              :style="{
                'background-color': colorSchema[Math.round(movie.vote_average)],
              }"
              style="border-radius: 8px; padding: 0.5em 1em"
              >{{ movie.vote_average.toFixed(2) }}

              <q-tooltip>{{ $t("votes") }}: {{ movie.vote_count }}</q-tooltip>
            </span>
          </div>
        </q-img>
      </div>

      <span
        class="inline-block"
        style="font-size: 12px; padding: 2px"
        v-for="movieGenre in movie[genresField]"
        :key="movieGenre"
      >
        {{
          isFavoritePage ? movieGenre.name : movieStore.genresById[movieGenre]
        }}
      </span>
    </q-card>
  </div>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";
import { imagePath } from "src/utils";
import { colorSchema } from "src/utils";
import stores from "stores/stores";
export default defineComponent({
  name: "popular-movies-table",
  props: {
    isCategoryPage: { type: Boolean, required: false, default: false },
    categoryId: { type: Number, required: false },
    isFavoritePage: { type: Boolean, required: false, default: false },
  },
  setup() {
    const movieStore = stores.movies();

    return {
      movieStore,
    };
  },
  data() {
    return {
      moviesList: [],
      colorSchema: colorSchema,
      requestParams: {},
    };
  },
  methods: {
    handleScroll(e) {
      let nextPage = this.movieStore.popularMovies.page + 1;
      if (
        window.scrollY + window.innerHeight >= document.body.scrollHeight &&
        this.movieStore.popularMovies.page !== nextPage &&
        nextPage <= this.movieStore.popularMovies.total_pages
      ) {
        this.movieStore.FETCH_POPULAR_MOVIES(nextPage, this.requestParams);
      }
    },
    goToMovie(movieData) {
      this.$router.push({ name: "movie", params: { id: movieData.id } });
    },
  },
  computed: {
    imagePath() {
      return imagePath;
    },
    genresField() {
      return this.isFavoritePage ? "genres" : "genre_ids";
    },
  },
  async mounted() {
    this.requestParams = {
      ...(this.isCategoryPage && { with_genres: this.categoryId }),
    };
    if (!this.isFavoritePage) {
      this.movieStore.FETCH_POPULAR_MOVIES(1, this.requestParams);
      window.addEventListener("scroll", this.handleScroll);
    } else {
      this.moviesList = this.movieStore.favoriteMovies;
    }
  },
  unmounted() {
    if (!this.isFavoritePage) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  watch: {
    "movieStore.getPopularMovies": {
      handler: function () {
        this.moviesList.push(...this.movieStore.getPopularMovies);
      },
    },
    categoryId: {
      handler: async function () {
        this.requestParams["with_genres"] = this.categoryId;
        await this.movieStore.FETCH_POPULAR_MOVIES(1, this.requestParams);
        this.moviesList = this.movieStore.getPopularMovies;
      },
    },
  },
});
</script>

<style scoped lang="scss">
.item {
  padding: 10px;
  margin: 10px;
  height: 400px;
  width: 300px;
}

p {
  margin-bottom: 0;
}
</style>
