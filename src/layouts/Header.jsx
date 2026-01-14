import { useState, useMemo, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher ";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const certMenuRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // 🔐 Admin state
  const [openAdmin, setOpenAdmin] = useState(false);
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  const isActive = (path) => location.pathname === path;

  const handleAdminClick = () => {
    if (!isAdminLoggedIn) {
      navigate("/login");
    } else {
      setOpenAdmin(!openAdmin);
    }
  };

  const handleAdminLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminName");
    setOpenAdmin(false);
    navigate("/login");
  };

  const navItems = useMemo(
    () => [
      { name: t("menu.home"), to: "/", hasSubmenu: false },
      {
        name: t("menu.online_certificates.title"),
        hasSubmenu: true,
        submenu: [
          { name: t("menu.online_certificates.submenu.birth_certificate"), to: "/birth-certificate" },
          { name: t("menu.online_certificates.submenu.caste_certificate"), to: "/caste-certificate" },
          { name: t("menu.online_certificates.submenu.bpl_certificate"), to: "/bpl-certificate" },
          { name: t("menu.online_certificates.submenu.marriage_certificate"), to: "/marriage-certificate" },
          { name: t("menu.online_certificates.submenu.form8extract"), to: "/form8extract" },
          { name: t("menu.online_certificates.submenu.no_dues_certificate"), to: "/no-dues-certificate" },
        ],
      },
      { name: t("menu.water_supply"), to: "/water-supply", hasSubmenu: false },
      { name: t("menu.property_tax"), to: "/property-tax", hasSubmenu: false },
      { name: t("menu.construction"), to: "/construction", hasSubmenu: false },
      { name: t("menu.tax_payment"), to: "/tax-payment", hasSubmenu: false },
      { name: t("menu.about_gram_panchayat"), to: "/about-gram-panchayat", hasSubmenu: false },
      { name: t("menu.officials"), to: "/officials", hasSubmenu: false },
      { name: t("menu.gram_vibhag"), to: "/gram-vibhag", hasSubmenu: false },
    ],
    [t]
  );


  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       certMenuRef.current &&
  //       !certMenuRef.current.contains(event.target)
  //     ) {
  //       setActiveSubmenu(null);
  //     }
  //   };
  
  //   document.addEventListener("click", handleClickOutside);
  
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    if (mobileMenuOpen) return; 
  
    const handleClickOutside = (event) => {
      if (
        certMenuRef.current &&
        !certMenuRef.current.contains(event.target)
      ) {
        setActiveSubmenu(null);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  

  const handleMobileNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };
  

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b border-green-100">
        <div className="container mx-auto px-2 py-2 flex items-center justify-between gap-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <img
                src="https://ext.same-assets.com/4149277301/1189064963.png"
                alt="Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full"
              />
              <span className="font-bold text-green-800 leading-tight text-[11px] sm:text-sm md:text-lg">
                Yashvantnagar Grampanchayat, Yashvantnagar <br />
                यशवंतनगर ग्रामपंचायत, यशवंतनगर
              </span>
            </div>
          </Link>

          {/* Language */}
          <LanguageSwitcher />

          {/* Contact + Admin Icon (DESKTOP) */}
          <div className="hidden md:flex items-center space-x-3 relative">
            <Link to="/contact" className="text-green-700 hover:text-orange-500">
              {t("menu.contact")}
            </Link>

            {/* Admin Icon */}
            <button
              onClick={handleAdminClick}
              className="p-2 rounded-full hover:bg-green-100"
              title="Admin"
            >
              <FiUser size={18} className="text-green-700" />
            </button>

            {/* Logout dropdown */}
            {openAdmin && isAdminLoggedIn && (
              <div className="absolute right-0 top-10 bg-white border rounded shadow w-28 z-50">
                <button
                  onClick={handleAdminLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-green-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav ref={dropdownRef} className="bg-green-50 border-b border-green-100 hidden md:block">

        <div className="container mx-auto px-4">
          <ul className="flex space-x-2">
            {navItems.map((item) => (
          <li
          key={item.name}
          className="relative"
          ref={item.hasSubmenu ? certMenuRef : null}
        >
        

                {item.hasSubmenu ? (
                  <button
                    onClick={() =>
                      setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                    }
                    className="flex items-center px-4 py-3 text-green-800 hover:text-orange-500 hover:bg-green-100"
                  >
                    {item.name}
                    <FiChevronDown
                      className={`ml-1 transition-transform ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`flex items-center px-4 py-3 ${
                      isActive(item.to)
                        ? "text-green-900 font-semibold border-b-2 border-green-600"
                        : "text-green-800"
                    } hover:text-orange-500 hover:bg-green-100`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu */}
                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 bg-white shadow-lg rounded-md mt-1 z-20 min-w-[220px]">
                    <ul className="py-2">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.to}
                            onClick={() => setActiveSubmenu(null)}
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

      {/* ================= MOBILE NAV (UNCHANGED) ================= */}
      {/* {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 pb-4 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() =>
                  item.hasSubmenu
                    ? setActiveSubmenu(activeSubmenu === item.name ? null : item.name)
                    : setMobileMenuOpen(false)
                }
                className="w-full flex justify-between items-center px-3 py-2 text-green-800 hover:bg-green-50 rounded-md"
              >
                {item.name}
                {item.hasSubmenu && (
                  <FiChevronDown
                    className={`transition-transform ${
                      activeSubmenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.hasSubmenu && activeSubmenu === item.name && (
                <div className="pl-4 mt-1 space-y-1">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-2 py-2 text-green-700 hover:bg-green-50 rounded-md"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )} */}


      {/* ================= MOBILE NAV (FIXED) ================= */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100 px-4 pb-4 max-h-[70vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <div key={item.name}>
                {/* MAIN ITEM */}
                <button
                  onClick={() => {
                    if (item.hasSubmenu) {
                      setActiveSubmenu(
                        activeSubmenu === item.name ? null : item.name
                      );
                    } else {
                      handleMobileNavigate(item.to);
                    }
                  }}
                  className="w-full flex justify-between items-center px-3 py-2 text-green-800 hover:bg-green-50 rounded-md"
                >
                  {item.name}

                  {item.hasSubmenu && (
                    <FiChevronDown
                      className={`transition-transform ${
                        activeSubmenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>


                {/* SUBMENU */}
                {item.hasSubmenu && activeSubmenu === item.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleMobileNavigate(sub.to)}
                        className="block w-full text-left px-2 py-2 text-green-700 hover:bg-green-50 rounded-md"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

            </header>
          );
        }
