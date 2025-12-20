import React from "react";
import { useTranslation } from "react-i18next";
import image4 from "./../assets/image4.jpg";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="pt-12 md:pt-10 pb-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {t("about_section.title")}
              </h2>

              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                {t("about_section.description")}
              </p>

              <a
                href="#about_approach"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
              >
                {t("about_section.more")}
              </a>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={image4}
                alt="Yashvantnagar Gram Panchayat"
                className="rounded-2xl shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH & MISSION */}
      <section id="about_approach" className="w-full bg-green-50 py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-6 md:grid md:grid-cols-2 md:gap-10 md:space-y-0">

          {/* OUR APPROACH */}
          <div className="bg-white rounded-xl shadow-md border-l-4 md:border-l-8 border-green-600 p-4 md:p-8">
            <h3 className="text-lg md:text-2xl font-bold text-green-800 mb-3">
              {t("about_approach.title")}
            </h3>

            <p className="text-sm md:text-base text-gray-700 mb-3 text-justify">
              {t("about_approach.description")}
            </p>

            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
              <li>{t("about_approach.vision_description1")}</li>
              <li>{t("about_approach.vision_description2")}</li>
              <li>{t("about_approach.vision_description3")}</li>
            </ul>
          </div>

          {/* OUR MISSION */}
          <div className="bg-white rounded-xl shadow-md border-l-4 md:border-l-8 border-green-600 p-4 md:p-8">
            <h3 className="text-lg md:text-2xl font-bold text-green-800 mb-3">
              {t("about_scope.title")}
            </h3>

            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 text-justify">
              <li>{t("about_scope.point1")}</li>
              <li>{t("about_scope.point2")}</li>
              <li>{t("about_scope.point3")}</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
