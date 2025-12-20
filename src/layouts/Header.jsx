import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher ";

export default function Header() {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;
  const currentLang = i18n.language;

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem("i18nextLng", lang);
};


  const navItems = useMemo(() => [
    {
      name: t("menu.home"),
      to: "/",
      hasSubmenu: false,
    },
    {
      name: t("menu.online_certificates.title"),
      hasSubmenu: true,
      submenu: [
        {
          name: t("menu.online_certificates.submenu.birth_certificate"),
          to: "/birth-certificate",
        },
        {
          name: t("menu.online_certificates.submenu.caste_certificate"),
          to: "/caste-certificate",
        },
        {
          name: t("menu.online_certificates.submenu.bpl_certificate"),
          to: "/bpl-certificate",
        },
        {
          name: t("menu.online_certificates.submenu.marriage_certificate"),
          to: "/marriage-certificate",
        },
      ],
    },
    
    { name: t("menu.water_supply"), to: "/water-supply", hasSubmenu: false },
    { name: t("menu.property_tax"), to: "/property-tax", hasSubmenu: false },
    { name: t("menu.construction"), to: "/construction", hasSubmenu: false },
    { name: t("menu.tax_payment"), to: "/tax-payment", hasSubmenu: false },
    { name: t("menu.about_gram_panchayat"), to: "/about-gram-panchayat", hasSubmenu: false },
    { name: t("menu.officials"), to: "/officials", hasSubmenu: false },
    { name: t("menu.gram_vibhag"), to: "/gram-vibhag", hasSubmenu: false },
  ], [t]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">

      {/* Top Bar */}
      <div className="  bg-white border-b border-green-100">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between gap-2">


          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/4149277301/1189064963.png"
                alt="Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full flex-shrink-0"
              />
              <span className="font-bold text-green-800 leading-tight text-[11px] sm:text-sm md:text-lg">
  Yashvantnagar Grampanchayat, Yashvantnagar <br />
  यशवंतनगर ग्रामपंचायत, यशवंतनगर
</span>


            </div>
          </Link>

          <LanguageSwitcher />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-green-700 hover:text-orange-500">{t("menu.contact")}</Link>
            {/* <Link to="/support" className="text-green-700 hover:text-orange-500">{t("menu.support")}</Link>
            <Link to="/get-started" className="btn-primary">{t("menu.get_started")}</Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-green-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-green-50 border-b border-green-100 hidden md:block">

        <div className="container mx-auto px-4">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.to}
                  className={`flex items-center px-4 py-3 ${isActive(item.to) ? "text-orange-500" : "text-green-800"} hover:text-orange-500 hover:bg-green-100`}
                >
                  {item.name}
                  {item.hasSubmenu && <FiChevronDown className="ml-1" />}
                </Link>

                {item.hasSubmenu && (
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-1 z-10">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.to}
                            className="block px-4 py-2 text-green-700 hover:bg-green-50 hover:text-orange-500"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 pb-4 max-h-[70vh] overflow-y-auto">

          {navItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() =>
                  item.hasSubmenu ? toggleSubmenu(item.name) : setMobileMenuOpen(false)
                }
                className="w-full flex justify-between items-center px-3 py-2 text-green-800 hover:bg-green-50 rounded-md"
              >
                {item.name}
                {item.hasSubmenu && (
                  <FiChevronDown
                    className={`transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {item.hasSubmenu && activeSubmenu === item.name && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-2 text-green-700 hover:bg-green-50 rounded-md"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-green-100 mt-4 space-y-2">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md">{t("menu.contact")}</Link>
            {/* <Link to="/support" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md">{t("menu.support")}</Link>
            <Link to="/get-started" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 btn-primary w-full text-center">{t("menu.get_started")}</Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
