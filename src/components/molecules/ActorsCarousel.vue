<template>
  <div class="flex">
    <actor-card
      v-for="actor in movieStore.mainMovieActors"
      :actor="actor"
      :key="actor.id"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import stores from "stores/stores";
import ActorCard from "src/components/atoms/details/ActorCard.vue";
export default defineComponent({
  name: "actors-carousel",
  components: {
    ActorCard,
  },

  setup() {
    const movieStore = stores.movies();
    return {
      movieStore,
    };
  },
  computed: {},
});
</script>

<style scoped></style>
