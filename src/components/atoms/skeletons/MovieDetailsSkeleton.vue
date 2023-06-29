<template>
  <div class="row">
    <div class="col-3 q-mr-sm">
      <q-skeleton class="movie-poster" animation="wave"></q-skeleton>
    </div>
    <div class="col flex" style="flex-wrap: initial; flex-direction: column">
      <div>
        <div class="flex items-center">
          <q-skeleton width="90%" height="50px" animation="wave"></q-skeleton>
        </div>
        <q-skeleton type="text" width="50px" animation="wave"></q-skeleton>
      </div>
      <div class="flex q-py-sm" style="flex-direction: column">
        <q-skeleton
          v-for="el in 4"
          :key="el"
          type="text"
          width="300px"
          animation="wave"
        ></q-skeleton>
      </div>

      <q-space></q-space>
      <q-skeleton width="300px" height="50px" animation="wave"></q-skeleton>
      <q-skeleton
        type="text"
        width="100%"
        v-for="el in 4"
        :key="el + 10"
        animation="wave"
      ></q-skeleton>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "movie-details-skeleton",
});
</script>

<style scoped lang="scss">
.movie-poster {
  height: 60vh;
  width: 40vh;
}
</style>
