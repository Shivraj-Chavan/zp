import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Akluj_Gram_panchayat from "../assets/Akluj-Gram-panchayat.jpg";
import image4 from './../assets/image4.jpg'

export default function About() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <section id='about' className="py-8 my-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Column */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{t('about_section.title')}</h3>
            <div className="text-justify text-gray-700 mb-6 leading-relaxed">
              <p>
                {t('about_section.description')}
              </p>
              <a
                href="#"
                className="inline-block bg-green-600 text-white px-5 py-2 mt-4 rounded hover:bg-green-700 transition"
              >
                {t('about_section.more')}
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={image4}
              alt="Yashvantnagar Gram Panchayat"
              className="w-3/4 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
