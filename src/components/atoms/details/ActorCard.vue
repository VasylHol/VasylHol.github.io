<template>
    <q-card class="actor-card q-ma-sm" flat>
        <q-img :src="actorImage" width="138px" height="175px"></q-img>
        <div class="text-dark" style="line-height: normal;">
            <p class="" style="font-weight: bold; font-size: 1em; padding: 10px  10px 0 10px ; margin: 0;">{{ actor.name }}
            </p>
            <p class="" style="font-size: 0.9em; padding: 0 10px; margin: 0;">{{ actor.character }}</p>
        </div>
    </q-card>
</template>

<script >
import { defineComponent } from 'vue'
import { imagePath } from 'src/utils'
export default defineComponent({
    name: 'actor-card',
    props: {
        actor: { type: Object, required: true }
    },
    computed: {
        actorImage() {
            return imagePath(this.actor.profile_path)
        }
    }

})
</script>

<style scoped lang="scss">
.actor-card {
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 270px;
}
</style>