import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-mint to-white">
        <h1 className="text-3xl font-bold text-indigo mb-4">{t("welcome")}</h1>
        <input
          className="w-80 p-3 rounded shadow mb-4 border-2 border-indigo focus:border-saffron focus:outline-none"
          placeholder={t("search_placeholder")}
        />
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-saffron text-white px-6 py-3 rounded-full font-bold shadow hover:shadow-lg transition">
            {t("create_shop")}
          </button>
          <button className="bg-indigo text-white px-6 py-3 rounded-full font-bold shadow hover:shadow-lg transition">
            {t("browse_stores")}
          </button>
        </div>
        
        {/* Floating Indian Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-saffron rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-10 w-12 h-12 bg-mint rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-indigo rounded-full opacity-20 animate-bounce"></div>
      </section>
    </div>
  );
};

export default Home; 