import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import { LOCALS } from "./constants.js";

const resources = {
    [LOCALS.EN]: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            button: {
                counts: "Count is {{click}}"
            }
        }
    },
    [LOCALS.FR]: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next",
            button: {
                counts: "Le compte est {{click}}"
            }
        }
    },
    [LOCALS.UK]: {
        translation: {
            "Welcome to React": "Ласкаво просимо до React та react-i18next",
            button: {
                counts: "Кількість кліків {{click}}"
            }
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources,
        fallbackLng: 'uk',
        //lng: "uk", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;