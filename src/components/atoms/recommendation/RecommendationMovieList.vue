<template>
    <span style="font-size: 32px;" class="q-pa-sm">{{ $t('recommendations') }}</span>
    <div style="overflow-x: auto; max-width: 100%;" class="flex no-wrap q-pb-sm">
        <div v-for="movie in movieStore.moviesByRecommendation" :key="movie.div" class="self-start q-mx-sm cursor-pointer"
            @click="goToMovie(movie.id)">
            <q-img height="140px" width="250px" style="border-radius: 16px;" :src="getImagePath(movie.backdrop_path)">
                <template v-slot:error>
                    <q-img fit="cover" :src="require('../../../../public/icons/image-not-found.jpg')">
                    </q-img>
                </template>
            </q-img>
            <p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 140px;">{{ movie.title }}
            </p>
        </div>
    </div>
</template>

<script>
import stores from 'stores/stores'
import { imagePath } from "src/utils"
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'recommendation-movie-list',
    setup() {
        const movieStore = stores.movies()
        return {
            movieStore
        }
    },
    methods: {
        getImagePath(path) {
            return imagePath(path)
        },
        goToMovie(id) {
            this.$router.push({ name: 'movie', params: { id: id } })
        }
    }

})
</script>

<style scoped lang="scss">
p {
    margin-bottom: 0;
}
</style>