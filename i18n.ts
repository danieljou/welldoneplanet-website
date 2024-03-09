/** @format */

import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./src/locale/en.json";
import frTranslation from "./src/locale/fr.json";

const resources: Resource = {
	en: {
		translation: enTranslation,
	},
	fr: {
		translation: frTranslation,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "fr",
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
