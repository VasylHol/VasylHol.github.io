<template>
  <q-layout view="lHh Lpr lFf" class="bg-custom">
    <q-header elevated class="flex items-center q-pa-sm" style="height: 60px;">
      <navigation-menu />
      <q-space></q-space>
      <language-switcher />
      <movie-searchbar />
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MovieSearchbar from 'src/components/molecules/MovieSearchbar.vue'
import LanguageSwitcher from 'src/components/atoms/header-components/LanguageSwitcher.vue';
import NavigationMenu from 'src/components/atoms/header-components/NavigationMenu.vue';
import stores from 'stores/stores';
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'MainLayout',
  components: {
    MovieSearchbar,
    LanguageSwitcher,
    NavigationMenu
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const movieStore = stores.movies()
    return { locale, movieStore }
  },
  mounted() {
    this.movieStore.FETCH_ALL_GENRES()
  },

  watch: {
    locale: {
      handler: function () {
        location.reload()
      }
    }
  }
})
</script>
