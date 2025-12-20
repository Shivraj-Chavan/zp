// src/pages/Officials.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const Officials = () => {
  const { t } = useTranslation();
  const officials = t("officials", { returnObjects: true }) || [];

  const topOfficials = officials.slice(0, 2); // First two
  const otherOfficials = officials.slice(2); // Remaining

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
        {t("menu.officials")}
      </h2>

      {/* Top 2 officials */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
        {topOfficials.map((official, index) => (
          <div
            key={index}
            className="bg-orange-100 border-2 border-orange-400 rounded-2xl shadow-lg p-8 w-full md:w-1/3 text-center transition hover:scale-105"
          >
            <div className="w-20 h-20 rounded-full bg-orange-300 mx-auto flex items-center justify-center text-orange-900 font-extrabold text-2xl mb-4">
              {official.name.charAt(0)}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{official.name}</h3>
            <p className="text-lg text-gray-700 font-medium">{official.role}</p>
          </div>
        ))}
      </div>

      {/* Other officials */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-">

      {otherOfficials.map((official, index) => (
          <div
            key={index + 2}
            className="bg-white rounded-xl shadow-sm p-3 sm:p-6 flex flex-col items-center justify-center transition md:hover:shadow-lg"
          >
            <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-green-200 flex items-center justify-center text-sm sm:text-xl mb-2 sm:mb-4">

              {official.name.charAt(0)}
            </div>
            <h3 className="text-sm sm:text-xl font-semibold text-center text-gray-900 leading-tight">

              {official.name}
            </h3>
            <p className="text-xs sm:text-sm text-center text-gray-600">{official.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Officials;



