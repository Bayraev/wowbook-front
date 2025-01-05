import "server-only";

const dictionaries = {
  ru: () => import("@/i18n/dictionaries/ru.json").then((mod) => mod.default),
  en: () => import("@/i18n/dictionaries/en.json").then((mod) => mod.default),
};

const getDictionary = async (locale: string) =>
  dictionaries[locale as keyof typeof dictionaries]() ?? dictionaries.en();

export default getDictionary;
