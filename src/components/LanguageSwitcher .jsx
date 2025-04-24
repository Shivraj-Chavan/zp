import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Set language from localStorage on component mount
  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
      setCurrentLang(storedLang);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    setCurrentLang(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-button ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        English
        
      </button>
      <button
        className={`lang-button ${currentLang === 'mr' ? 'active' : ''}`}
        onClick={() => changeLanguage('mr')}
      >
        मराठी
      </button>
    </div>
  );
};

export default LanguageSwitcher;
