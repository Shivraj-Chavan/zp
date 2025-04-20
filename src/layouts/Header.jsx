import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import LanguageSwitcher from "../components/LanguageSwitcher ";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
 

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };


  
  const isActive = (path) => location.pathname.startsWith(path);

  const navItems = useMemo(() => [
    {
      name: t("menu.home"),
      to: "/home",
      hasSubmenu: false,
    },
    {
      name: t("menu.online_certificates.title"),
      to: "/online-certificates",
      hasSubmenu: true,
      submenu: [
        {
          name: t("menu.online_certificates.submenu.caste_certificate"),
          to: "/online-certificates/caste",
        },
        {
          name: t("menu.online_certificates.submenu.birth_certificate"),
          to: "/online-certificates/birth",
        },
        {
          name: t("menu.online_certificates.submenu.bpl_certificate"),
          to: "/online-certificates/bpl",
        },
        {
          name: t("menu.online_certificates.submenu.marriage_certificate"),
          to: "/online-certificates/marriage",
        },
      ],
    },
    {
      name: t("menu.water_supply"),
      to: "/water-supply",
      hasSubmenu: false,
    },
    {
      name: t("menu.property_tax"),
      to: "/property-tax",
      hasSubmenu: false,
    },
    {
      name: t("menu.construction"),
      to: "/construction",
      hasSubmenu: false,
    },
    {
      name: t("menu.tax_payment"),
      to: "/tax-payment",
      hasSubmenu: false,
    },
    {
      name: t("menu.about_gram_panchayat"),
      to: "/about-gram-panchayat",
      hasSubmenu: false,
    },
    {
      name: t("menu.officials"),
      to: "/officials",
      hasSubmenu: false,
    },
    {
      name: t("menu.gram_vibhag"),
      to: "/gram-vibhag",
      hasSubmenu: false,
    },
  ], [t]);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-green-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="relative h-20 lg:w-3xl w-auto">
              <div className="flex items-center">
                <div className="h-10 w-10 lg:h-20 lg:w-24  rounded-full flex items-center justify-center mr-2">
                <img src="https://ext.same-assets.com/4149277301/1189064963.png" alt="" className="h-full " />
                </div>
                <span className="text-xs lg:text-lg font-bold text-green-800">
                  Akluj Gram Panchayat, Akluj <br />
                  अकलूज ग्राम पंचायत,अकलूज
                </span>
              </div>
            </div>
          </Link>

          {/* Language Switcher */}
         <LanguageSwitcher/>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-green-700 hover:text-orange-500">Contact</Link>
            <Link to="/support" className="text-green-700 hover:text-orange-500">Support</Link>
            <Link to="/get-started" className="btn-primary">Get Started</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-green-800" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-green-50 border-b border-green-100">
        <div className="container mx-auto px-4 hidden md:flex">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
                  aria-haspopup={item.hasSubmenu}
                  aria-expanded={activeSubmenu === item.name}
                  className={`flex items-center px-4 py-3 ${isActive(item.to) ? "text-orange-500" : "text-green-800"} hover:text-orange-500 hover:bg-green-100`}
                >
                  {item.name}
                  {item.hasSubmenu && <FiChevronDown size={16} className="ml-1" />}
                </button>

                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-10">
                    <ul className="py-2">
                      {item.submenu?.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.to}
                            className={`block px-4 py-2 ${isActive(subItem.to) ? "text-orange-500" : "text-green-700 hover:bg-green-50 hover:text-orange-500"}`}
                          >
                            {subItem.name}
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

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.hasSubmenu && toggleSubmenu(item.name)}
                    className="w-full flex justify-between items-center px-3 py-2 text-green-800 hover:bg-green-50 rounded-md"
                  >
                    {item.name}
                    {item.hasSubmenu && (
                      <FiChevronDown
                        size={16}
                        className={`transition-transform ${activeSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {item.hasSubmenu && activeSubmenu === item.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-green-100 mt-4 space-y-2">
                <Link to="/contact" className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md">
                  Contact
                </Link>
                <Link to="/support" className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded-md">
                  Support
                </Link>
                <Link to="/get-started" className="block px-3 py-2 btn-primary w-full text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
