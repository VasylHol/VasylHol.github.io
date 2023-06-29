<template>
  <div>
    <country-flag
      country="gb"
      class="flag"
      :class="{ 'choosed-language': locale === 'en-US' }"
      @click="changeLanguage('en-US')"
    />
    <country-flag
      country="ua"
      class="flag"
      @click="changeLanguage('uk')"
      :class="{ 'choosed-language': locale === 'uk' }"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "language-switcher",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    return {
      locale,
    };
  },
  methods: {
    changeLanguage(lang) {
      this.locale = lang;
      localStorage.setItem("app_language", lang);
    },
  },
});
</script>

<style lang="scss" scoped>
.choosed-language {
  padding: 10px;
  border: 1px solid white;
}
</style>
