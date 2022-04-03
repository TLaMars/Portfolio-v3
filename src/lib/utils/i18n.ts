import { _, init, addMessages } from "svelte-i18n";
import en from "../assets/locales/en.json";
import nl from "../assets/locales/nl.json";

const initI18n = (locale: string) => {
  addMessages("en", en);
  addMessages("nl", nl);

  init({
    fallbackLocale: "en",
    initialLocale: locale,
  });
};

export default initI18n;
