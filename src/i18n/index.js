import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to SkillBloom!",
      become_bloomer: "Become a Bloomer",
      create_shop: "Create My Shop",
      browse_stores: "Browse Local Stores",
      sign_in: "Sign In",
      logout: "Logout",
      search_placeholder: "Search product, seller or category…"
    }
  },
  hi: {
    translation: {
      welcome: "SkillBloom में आपका स्वागत है!",
      become_bloomer: "ब्लूमर बनें",
      create_shop: "मेरी दुकान बनाएं",
      browse_stores: "स्थानीय दुकानें देखें",
      sign_in: "साइन इन करें",
      logout: "लॉगआउट",
      search_placeholder: "उत्पाद, विक्रेता या श्रेणी खोजें…"
    }
  },
  mr: {
    translation: {
      welcome: "SkillBloom मध्ये आपले स्वागत आहे!",
      become_bloomer: "ब्लूमर व्हा",
      create_shop: "माझे दुकान तयार करा",
      browse_stores: "स्थानिक दुकाने पहा",
      sign_in: "साइन इन करा",
      logout: "लॉगआउट",
      search_placeholder: "उत्पाद, विक्रेता किंवा श्रेणी शोधा…"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n; 