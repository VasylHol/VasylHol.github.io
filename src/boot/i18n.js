import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import messages from "src/i18n";
import { appLanguage } from "src/utils";
export default boot(({ app }) => {
  const i18n = createI18n({
    locale: appLanguage,
    globalInjection: true,
    legacy: false,
    messages,
  });

  app.config.globalProperties.$i18n = i18n;
  // Set i18n instance on app
  app.use(i18n);
});
