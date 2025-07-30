import React from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCreateShop = () => {
    // For now, redirect to auth page to sign up first
    navigate("/auth");
  };

  const handleBrowseStores = () => {
    // Navigate to shop page
    navigate("/shop");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint to-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo mb-6 text-center">
          {t("welcome")}
        </h1>
        <div className="w-full max-w-md mb-6">
          <input
            className="w-full p-4 rounded-lg shadow-lg border-2 border-indigo focus:border-saffron focus:outline-none text-lg"
            placeholder={t("search_placeholder")}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleCreateShop}
            className="bg-saffron text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer"
          >
            {t("create_shop")}
          </button>
          <button 
            onClick={handleBrowseStores}
            className="bg-indigo text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg cursor-pointer"
          >
            {t("browse_stores")}
          </button>
        </div>
        
        {/* Floating Indian Elements */}
        <div className="fixed top-20 left-10 w-16 h-16 bg-saffron rounded-full opacity-20 animate-bounce pointer-events-none"></div>
        <div className="fixed top-40 right-10 w-12 h-12 bg-mint rounded-full opacity-20 animate-pulse pointer-events-none"></div>
        <div className="fixed bottom-20 left-20 w-8 h-8 bg-indigo rounded-full opacity-20 animate-bounce pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Home; 