import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const loadTranslations = async (lng) => {
  const common = await import(`./locales/${lng}/common.json`);
  const auth = await import(`./locales/${lng}/auth.json`);
  const user = await import(`./locales/${lng}/user.json`);
  const admin = await import(`./locales/${lng}/admin.json`);

  return {
    common: common.default,
    auth: auth.default,
    user: user.default,
    admin: admin.default,
  };
};

const initI18n = async () => {
  const defaultLng = localStorage.getItem("language") || "en";
  const translations = await loadTranslations(defaultLng);

  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: defaultLng,
      fallbackLng: "en",
      ns: ["common", "auth", "user", "admin"],
      defaultNS: "common",
      resources: {
        [defaultLng]: {
          common: translations.common,
          auth: translations.auth,
          user: translations.user,
          admin: translations.admin,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

i18n.on("languageChanged", async (lng) => {
  const translations = await loadTranslations(lng);
  i18n.addResources(lng, "common", translations.common);
  i18n.addResources(lng, "auth", translations.auth);
  i18n.addResources(lng, "user", translations.user);
  i18n.addResources(lng, "admin", translations.admin);
});

export default initI18n;
export { i18n };
