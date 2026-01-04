import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FiHome,
  FiDroplet,
  FiFileText,
  FiCreditCard,
} from "react-icons/fi";

export default function Sidebar() {
  const { t } = useTranslation();
  
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded ${
      isActive
        ? "bg-green-600 text-white"
        : "text-white hover:bg-green-600"
    }`;

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-green-700 p-4">
      {/* Title */}
      <div className="text-white mb-4">
        <h2 className="font-bold text-lg">
          {t('yashwantnagarGrampanchayat')}
        </h2>
        <p className="text-sm">{t('yashwantnagarMarathi')}</p>

        {/* light divider line */}
        <hr className="mt-3 border-green-300 opacity-50" />
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1 mt-4">
        <NavLink to="/admin" end className={linkClass}>
          <FiHome />
          {t('dashboard')}
        </NavLink>

        <NavLink to="/admin/bill-payment" className={linkClass}>
          <FiDroplet />
          {t('billRecord')}
        </NavLink>
      </nav>
    </div>
  );
}