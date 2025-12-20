import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language; 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); 
  };

  return (
    <div className="language-switcher flex gap-2">
      <button
        className={`lang-button ${currentLang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>

      <button
        className={`lang-button ${currentLang === "mr" ? "active" : ""}`}
        onClick={() => changeLanguage("mr")}
      >
        मराठी
      </button>
    </div>
  );
};

export default LanguageSwitcher;
