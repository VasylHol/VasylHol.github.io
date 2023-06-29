<template>
    <q-page padding>
        <div style="font-size: 32px;">{{ $t('genresPageTitle') }} "{{ movieStore.genresById[id] }}"</div>
        <popular-movies-table :isCategoryPage="true" :categoryId="id" />
    </q-page>
</template>

<script >
import { defineComponent } from 'vue'
import PopularMoviesTable from 'src/components/organisms/PopularMoviesTable.vue';
import stores from 'stores/stores';
export default defineComponent({
    name: 'category-page',
    props: { id: { type: Number, required: true } },
    components: {
        PopularMoviesTable
    },
    setup() {
        const movieStore = stores.movies()
        return {
            movieStore
        }
    },

})
</script>

<style scoped></style>