import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isLoggedIn = localStorage.getItem("isAdminLoggedIn");

  const handleUserClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setOpen(!open);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("adminName");
    setOpen(false);
    navigate("/login");
  };

  return (
    <div className="h-14 bg-white shadow flex items-center px-4 sticky top-0 z-50">
      {/* LOGO – click → login page */}
      <div
        onClick={() => navigate("/login")}
        className="cursor-pointer font-bold text-green-600 text-lg"
      >
        {t('gramPanchayat')}
      </div>

      {/* RIGHT SECTION */}
      <div className="ml-auto flex items-center gap-3 relative">
        {/* English */}
        <button
          onClick={() => i18n.changeLanguage("en")}
          className={`px-3 py-1 rounded border text-sm font-medium transition-all ${
            i18n.language === "en"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white hover:bg-gray-50 border-gray-300"
          }`}
        >
          English
        </button>

        {/* Marathi */}
        <button
          onClick={() => i18n.changeLanguage("mr")}
          className={`px-3 py-1 rounded border text-sm font-medium transition-all ${
            i18n.language === "mr"
              ? "bg-green-600 text-white border-green-600"
              : "bg-white hover:bg-gray-50 border-gray-300"
          }`}
        >
          मराठी
        </button>

        {/* USER ICON ONLY */}
        <button
          onClick={handleUserClick}
          className="flex items-center justify-center border p-2 rounded-full hover:bg-gray-100 transition-all"
        >
          <FiUser size={18} />
        </button>

        {/* DROPDOWN (ONLY WHEN LOGGED IN) */}
        {open && isLoggedIn && (
          <div className="absolute right-0 top-10 bg-white border rounded shadow-lg w-32 overflow-hidden">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all"
            >
              {t('logout')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}