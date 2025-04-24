import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../assets/Akluj-Gram-panchayat.jpg";
import slide2 from "../assets/akluj1.jpg";
import slide3 from "../assets/Akluj17 solapur.jpg";
import { useTranslation } from "react-i18next";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation(); // Hook to get current language translations

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Use useMemo to prevent unnecessary recalculations when language changes
  const slides = useMemo(
    () => [
      {
        id: 1,
        title: t("slide1Title"), // Dynamic translation
        description: t("slide1Description"), // Dynamic description
        cta: "",
        ctaLink: "#",
        image: slide1,
      },
      {
        id: 2,
        title: t("slide2Title"),
        description: t("slide2Description"),
        cta: "",
        ctaLink: "#",
        image: slide2,
      },
      {
        id: 3,
        title: t("slide3Title"),
        description: t("slide3Description"),
        cta: "",
        ctaLink: "#",
        image: slide3,
      },
    ],
    [t] // Recalculate when language changes
  );

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xxl ms-10">
                  <h1 className="ps-2 lg:ps-8 text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="ps-2 lg:ps-8 text-xl text-white/90 mb-8">
                    {slide.description}
                  </p>
                  <Link to={slide.ctaLink} className="btn-primary">
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm z-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm z-10"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-orange-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
