<template>
  <q-page padding style="overflow-x: hidden">
    <div v-if="skeleton">
      <movie-details-skeleton />
    </div>
    <div v-else>
      <div class="row">
        <div class="col-3 q-mr-sm">
          <q-img :src="imgPath" class="movie-poster">
            <span
              :style="{ 'background-color': ratingColor }"
              class="text-black absolute-bottom-right q-ma-sm"
              style="border-radius: 8px; padding: 0.5em 1em"
              >{{ movie.vote_average.toFixed(2) }}</span
            >

            <template v-slot:error>
              <q-img
                class="movie-poster"
                fit="cover"
                :src="require('../../public/icons/image-not-found.jpg')"
              >
              </q-img>
            </template>
          </q-img>
        </div>
        <movie-details :movie="movie" />
      </div>
      <div class="flex items-center" style="flex-direction: column">
        <h3
          class="q-pa-sm"
          style="
            margin-right: auto;
            margin-bottom: 0;
            font-weight: 600;
            font-size: 1.4em;
          "
        >
          {{ $t("mainActors") }}
        </h3>
        <actors-carousel />
      </div>
      <video-player />
      <recommendation-movie-list />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { colorSchema } from "src/utils";
import ActorsCarousel from "src/components/molecules/ActorsCarousel.vue";
import MovieDetails from "src/components/atoms/details/MovieDetails.vue";
import MovieDetailsSkeleton from "src/components/atoms/skeletons/MovieDetailsSkeleton.vue";
import RecommendationMovieList from "src/components/atoms/recommendation/RecommendationMovieList.vue";
import VideoPlayer from "src/components/molecules/VideoPlayer.vue";
import stores from "stores/stores";
export default defineComponent({
  name: "movie-page",
  components: {
    MovieDetails,
    ActorsCarousel,
    VideoPlayer,
    RecommendationMovieList,
    MovieDetailsSkeleton,
  },
  props: {
    id: { type: String, required: true },
  },
  setup() {
    const movieStore = stores.movies();
    const imgDatabasePath = "https://image.tmdb.org/t/p/w500";

    return {
      movieStore,
      imgDatabasePath,
    };
  },
  data() {
    return {
      movie: null,
      skeleton: false,
    };
  },

  computed: {
    imgPath() {
      return `${this.imgDatabasePath}${this.movie.poster_path}`;
    },
    ratingColor() {
      return colorSchema[Math.round(this.movie.vote_average)];
    },
    youtubePath() {
      return this.movieStore.videos[0].key;
    },
  },

  watch: {
    id: {
      handler: async function () {
        this.skeleton = true;
        this.movie = await this.movieStore.FETCH_SINGLE_MOVIE_INFORMATION(
          this.id
        );
        this.skeleton = false;
      },
      immediate: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.movie-poster {
  max-height: 60vh;
  max-width: 40vh;
}
</style>
