<template>
  <div class="flex q-pa-sm" style="flex-direction: column">
    <div style="font-size: 32px">{{ $t("videos") }}</div>
    <div v-if="!movieStore.selectedVideo?.key" class="q-pa-md">
      {{ $t("videoNotFoundMessage") }}
    </div>
    <div v-else class="flex justify-center">
      <youtube-player
        :videoid="movieStore.selectedVideo.key"
        :width="600"
        :height="350"
        :controls="1"
        :autoplay="0"
        ref="youtube"
      />
      <video-list />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import stores from "stores/stores";
import VideoList from "../atoms/video/VideoList.vue";
export default defineComponent({
  name: "video-player",
  components: {
    VideoList,
  },
  setup() {
    const movieStore = stores.movies();
    return {
      movieStore,
    };
  },
});
</script>

<style scoped lang="scss"></style>
