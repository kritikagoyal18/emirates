import React from "react";
import { getLangCode, subscribeLangCode } from "./index";

const dictionaries = {
  en: {
    header: {
      book: "Book",
      manage: "Manage",
      experience: "Experience",
      whereWeFly: "Where We Fly",
      loyalty: "Loyalty",
      help: "Help",
      login: "Log in",
    },
    booking: {
      tabs: {
        search: "Search flights",
        manage: "Manage booking / Check in",
        whatsOn: "What's on your flight",
        status: "Flight status",
      },
      flight: "Flight",
      flightHotel: "Flight + hotel",
      departure: "Departure airport",
      arrival: "Arrival airport",
      placeholders: {
        departure: "New Delhi (DEL)",
        arrival: "Arrival airport",
      },
      continue: "Continue",
      advanced: "Advanced search: multi-city, promo codes, partner airlines",
    },
    locations: {
      titleWorld: "Featured destinations from World",
    },
  },
  ar: {
    header: {
      book: "احجز",
      manage: "إدارة",
      experience: "التجربة",
      whereWeFly: "وجهاتنا",
      loyalty: "الولاء",
      help: "مساعدة",
      login: "تسجيل الدخول",
    },
    booking: {
      tabs: {
        search: "البحث عن رحلات",
        manage: "إدارة الحجز / إنهاء الإجراءات",
        whatsOn: "ما على رحلتك",
        status: "حالة الرحلة",
      },
      flight: "رحلة",
      flightHotel: "رحلة + فندق",
      departure: "مطار المغادرة",
      arrival: "مطار الوصول",
      placeholders: {
        departure: "مثال: دبي (DXB)",
        arrival: "مطار الوصول",
      },
      continue: "متابعة",
      advanced: "بحث متقدم: مدن متعددة، رموز ترويجية، شركات شريكة",
    },
    locations: {
      titleWorld: "وجهات مميزة من العالم",
    },
  },
  fr: {
    header: {
      book: "RÉSERVER",
      manage: "GÉRER",
      experience: "EXPÉRIENCE",
      whereWeFly: "OÙ NOUS VOLONS",
      loyalty: "FIDÉLITÉ",
      help: "AIDE",
      login: "Se connecter",
    },
    booking: {
      tabs: {
        search: "Rechercher des vols",
        manage: "Gérer la réservation / Enregistrement",
        whatsOn: "À bord de votre vol",
        status: "Statut du vol",
      },
      flight: "Vol",
      flightHotel: "Vol + hôtel",
      departure: "Aéroport de départ",
      arrival: "Aéroport d'arrivée",
      placeholders: {
        departure: "Ex. New Delhi (DEL)",
        arrival: "Aéroport d'arrivée",
      },
      continue: "Continuer",
      advanced: "Recherche avancée : multi-destinations, codes promo, compagnies partenaires",
    },
    locations: {
      titleWorld: "Destinations phares depuis le monde",
    },
  },
  es: {
    header: {
      book: "RESERVAR",
      manage: "GESTIONAR",
      experience: "EXPERIENCIA",
      whereWeFly: "DÓNDE VOLAMOS",
      loyalty: "FIDELIDAD",
      help: "AYUDA",
      login: "Iniciar sesión",
    },
    booking: {
      tabs: {
        search: "Buscar vuelos",
        manage: "Gestionar reserva / Check-in",
        whatsOn: "Qué hay en tu vuelo",
        status: "Estado del vuelo",
      },
      flight: "Vuelo",
      flightHotel: "Vuelo + hotel",
      departure: "Aeropuerto de salida",
      arrival: "Aeropuerto de llegada",
      placeholders: {
        departure: "Ej.: Nueva Delhi (DEL)",
        arrival: "Aeropuerto de llegada",
      },
      continue: "Continuar",
      advanced: "Búsqueda avanzada: multicity, códigos promocionales, aerolíneas asociadas",
    },
    locations: {
      titleWorld: "Destinos destacados desde el mundo",
    },
  },
};

function getDict(lang) {
  return dictionaries[lang] || dictionaries.en;
}

const subscribers = new Set();

export function t(key, params = {}) {
  const lang = getLangCode();
  const dict = getDict(lang);
  const value = key.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict);
  const fallback = key.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dictionaries.en);
  const str = value ?? fallback ?? key;
  return Object.keys(params).reduce((out, p) => out.replace(new RegExp(`\\{${p}\\}`, "g"), String(params[p])), str);
}

export function setDocumentLanguageAttributes(lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

export function useI18n() {
  const lang = getLangCode();
  const [, setTick] = React.useState(0);
  React.useEffect(() => {
    const unsub = subscribeLangCode(() => setTick((x) => x + 1));
    return unsub;
  }, []);
  return { t, langCode: lang };
}


