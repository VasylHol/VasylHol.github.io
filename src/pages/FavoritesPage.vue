<template>
  <q-page padding>
    <div style="font-size: 32px">{{ $t("favoritesPageTitle") }}</div>
    <div v-if="!movieStore.favoriteMovies.length">
      {{ $t("noFavoritesMessage") }}
    </div>
    <popular-movies-table :is-favorite-page="true" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import PopularMoviesTable from "src/components/organisms/PopularMoviesTable.vue";
import stores from "src/stores/stores";
export default defineComponent({
  name: "favorites-page",
  components: { PopularMoviesTable },
  setup() {
    const movieStore = stores.movies();

    return {
      movieStore,
    };
  },
});
</script>

<style scoped></style>
