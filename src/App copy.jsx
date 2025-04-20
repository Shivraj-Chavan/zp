import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">{t("common:welcome")}</h1>

      <div className="flex space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("mr")}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          मराठी
        </button>
      </div>
    </div>
  );
};

export default App;
