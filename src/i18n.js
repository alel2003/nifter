import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import EN from "./locales/en/translation.json"
import RU from "./locales/ru/translation.json"


const resources = {
    en: EN,
    ru: RU,
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("locale") ?? "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
