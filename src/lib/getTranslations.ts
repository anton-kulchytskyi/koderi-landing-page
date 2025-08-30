import { localizationData } from "@/content/localizationData";

export type Locale = keyof typeof localizationData; // "uk" | "en"

export function getTranslations(locale: Locale) {
  return localizationData[locale];
}
