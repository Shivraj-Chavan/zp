import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from './../assets/image1.jpg'
import image2 from './../assets/image2.jpg'
import image3 from './../assets/mandir.jpg'
import image4 from './../assets/image4.jpg'
import image5 from './../assets/image5.jpg'
export default function GallerySection() {
  const { t } = useTranslation();
  const images = [
    {
      url:image1
    },{
      url:image2
    },{
      url:image3
    },{
      url:image4
    },{
      url:image5
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{t("gallery_title")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image?.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-62 object-cover rounded-lg shadow hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
