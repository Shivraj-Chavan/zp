import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GallerySection() {
  const { t } = useTranslation();
  const images = [
    "https://ext.same-assets.com/4149277301/328835932.jpeg",
    "https://ext.same-assets.com/4149277301/2047142096.jpeg",
    "https://ext.same-assets.com/4149277301/2602581135.jpeg",
    "https://ext.same-assets.com/4149277301/3191127022.jpeg",
    "https://ext.same-assets.com/4149277301/2997058946.jpeg",
    "https://ext.same-assets.com/4149277301/397609496.jpeg",
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{t("gallery_title")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg shadow hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
