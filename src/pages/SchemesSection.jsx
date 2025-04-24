import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SchemesSection({ schemes }) {
  const { t } = useTranslation();

  return (

    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{t("major_schemes")}</h3>
        <div className="flex flex-wrap -mx-2">
          {schemes.map((scheme, index) => (
            <div key={index} className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-md h-full p-4 border border-gray-200 hover:shadow-lg transition-shadow">
                <h5 className="text-lg font-semibold text-orange-700 mb-2">{scheme.title}</h5>
                <p className="text-sm text-black-600 mb-4">{scheme.description}</p>
                <a href="#" className="inline-block bg-green-600 text-white text-sm px-4 py-1 rounded hover:bg-orange-700 transition-all">
                  {t("read_more")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}