import en from "./lang/en.json";
import pl from "./lang/pl.json";

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "pl",
    messages: {
      en,
      pl,
    },
  };
});
