import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo to-saffron rounded-full flex items-center justify-center text-white font-bold text-lg">
          SB
        </div>
        <span className="ml-2 text-indigo font-bold text-xl">SkillBloom</span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/shop">
          <button className="bg-saffron text-white px-4 py-2 rounded-full font-bold shadow hover:shadow-lg transition">
            {t("become_bloomer")}
          </button>
        </Link>
        <select
          onChange={e => i18n.changeLanguage(e.target.value)}
          className="rounded px-2 py-1 border border-gray-300 focus:border-indigo focus:outline-none"
          value={i18n.language}
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
        {user ? (
          <button onClick={onLogout} className="ml-2 text-indigo hover:text-saffron transition">
            {t("logout")}
          </button>
        ) : (
          <Link to="/auth" className="ml-2 text-indigo hover:text-saffron transition">
            {t("sign_in")}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 