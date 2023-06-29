<template>
  <q-page padding>
    <div style="font-size: 32px">{{ $t("homePageTitle") }}</div>
    <popular-movies-table />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import stores from "stores/stores";
import PopularMoviesTable from "src/components/organisms/PopularMoviesTable.vue";
export default defineComponent({
  name: "home-page",
  components: {
    PopularMoviesTable,
  },
  setup() {
    const moviesStore = stores.movies();
    return {
      moviesStore,
    };
  },
  methods: {
    resetStore() {
      this.moviesStore.$reset();
    },
  },
});
</script>
