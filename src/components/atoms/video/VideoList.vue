<template>
  <div class="video-list text-dark" style="overflow: hidden">
    <div
      class="cursor-pointer video-card"
      style="overflow-y: auto; max-height: 350px"
    >
      <video-card
        v-for="video in movieStore.videos"
        :key="video.id"
        :video="video"
        :style="{
          'background-color':
            video.id === movieStore.selectedVideo.id
              ? 'rgb(160, 160, 160)'
              : '',
        }"
        class="q-pa-sm"
        @click="selectVideo(video)"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import VideoCard from "./VideoCard.vue";
import stores from "stores/stores";
export default defineComponent({
  components: { VideoCard },
  name: "video-list",
  setup() {
    const movieStore = stores.movies();
    return {
      movieStore,
    };
  },
  methods: {
    selectVideo(video) {
      this.movieStore.selectedVideo = video;
    },
  },
});
</script>

<style scoped lang="scss">
.video-list {
  border-radius: 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: white;
}

.video-card :hover {
  border-bottom-right-radius: 16px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: rgb(160, 160, 160);
}
</style>
