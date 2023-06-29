<template>
  <q-item class="movie-card">
    <div
      class="row wrap cursor-pointer"
      style="width: 100%"
      @click="$emit('goToMovie', item)"
    >
      <q-img :src="imgPath" class="poster" fit="cover">
        <template v-slot:error>
          <q-img
            class="poster"
            fit="cover"
            :src="require('../../../public/icons/image-not-found.jpg')"
          >
          </q-img>
        </template>
      </q-img>
      <div class="column justify-between q-pa-sm" style="height: 150px">
        <div class="title">
          <span class="text-weight-bold" style="font-size: 18px"
            >{{ item.title }}
          </span>
          <br />
          <span style="font-size: 12px">{{
            item.overview.slice(0, 120) + "..."
          }}</span>
        </div>
        <div class="flex justify-between items-end">
          <span>{{ $t("votes") }}: {{ item.vote_count }}</span>
          <span>
            <q-icon
              name="star"
              size="sm"
              class="self-end q-mr-sm"
              color="yellow"
              style="margin-left: auto"
            ></q-icon>
            <span
              :style="{ 'background-color': ratingColor }"
              class="text-black self-end"
              style="border-radius: 8px; padding: 0.5em 1em"
              >{{ item.vote_average.toFixed(2) }}</span
            >
          </span>
        </div>
      </div>
    </div>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { colorSchema } from "src/utils";
export default defineComponent({
  name: "search-movie-card",
  props: {
    item: { type: Object, default: () => {}, required: false },
  },
  emits: ["goToMovie"],
  data() {
    return {
      imgDatabasePath: "https://image.tmdb.org/t/p/w500",
    };
  },
  computed: {
    imgPath() {
      return `${this.imgDatabasePath}${this.item.poster_path}`;
    },
    ratingColor() {
      return colorSchema[Math.round(this.item.vote_average)];
    },
  },
});
</script>

<style lang="scss" scoped>
.movie-card {
  min-width: 500px;

  &:deep(.q-img__content > div) {
    padding: 8px;
  }
}

.poster {
  height: 150px;
  width: 150px;
}

// .fav-icon {
//     &:deep(.q-icon) {
//         width: 0;
//     }
// }

.title {
  width: 300px;
  line-height: normal;
  align-self: flex-start;
}

.movie-card :hover {
  background-color: rgb(102, 97, 97);
}
</style>
