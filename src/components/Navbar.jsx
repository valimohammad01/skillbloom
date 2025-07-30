import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ user, onLogout }) => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo to-saffron rounded-full flex items-center justify-center text-white font-bold text-lg">
          SB
        </div>
        <span className="ml-2 text-indigo font-bold text-xl">SkillBloom</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-saffron text-white px-4 py-2 rounded-full font-bold shadow hover:shadow-lg transition">
          {t("become_bloomer")}
        </button>
        <select
          onChange={e => i18n.changeLanguage(e.target.value)}
          className="rounded px-2 py-1 border"
        >
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
        {user ? (
          <button onClick={onLogout} className="ml-2">{t("logout")}</button>
        ) : (
          <a href="/auth" className="ml-2">{t("sign_in")}</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 