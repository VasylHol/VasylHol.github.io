<template>
    <div>
        <p>{{ video.name }}</p>
        <p>{{ video.type }}</p>
    </div>
</template>

<script>
import stores from 'stores/stores'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'video-card',
    props: {
        video: { type: Object, required: true },

    },
    setup() {
        const movieStore = stores.movies()
        return {
            movieStore
        }
    }
})
</script>

<style scoped lang="scss">
p {
    margin: 0
}
</style>