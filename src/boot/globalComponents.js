import { boot } from "quasar/wrappers";
import CountryFlag from 'vue-country-flag-next'
import { YoutubeVue3 } from "youtube-vue3";
export default boot(({ app }) => {
    app.component('country-flag', CountryFlag)
    app.component('youtube-player', YoutubeVue3)

})

