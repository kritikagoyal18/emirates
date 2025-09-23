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
    footer: {
      rights: "© 2025 The Emirates Group. All Rights Reserved.",
      about: {
        title: "About us",
        aboutUs: "About us",
        careers: "Careers",
        mediaCentre: "Media Centre",
        ourPlanet: "Our planet",
        ourPeople: "Our people",
        ourCommunities: "Our communities",
      },
      help: {
        title: "Help",
        helpContact: "Help and Contact",
        travelUpdates: "Travel Updates",
        specialAssistance: "Special Assistance",
        faq: "Frequently asked questions",
      },
      book: {
        title: "Book",
        bookFlights: "Book flights",
        travelServices: "Travel services",
        transportation: "Transportation",
        planningTrip: "Planning your trip",
      },
      manage: {
        title: "Manage",
        checkIn: "Check‑in",
        manageBooking: "Manage your booking",
        chauffeurDrive: "Chauffeur drive",
        flightStatus: "Flight status",
      },
      targeted: {
        newToEmirates: "New to Emirates — Get Offer",
        welcomeMessage: "Welcome to Emirates. Unlock a special introductory offer and start your premium journey today.",
        getOffer: "Get Offer",
        explorePremium: "Explore Premium - New",
        experienceB: "Experience B - Premium",
        premiumDescription: "Discover our enhanced Emirates experience with premium comfort and luxury services that exceed expectations."
      },
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
    footer: {
      rights: "© 2025 مجموعة الإمارات. جميع الحقوق محفوظة.",
      about: {
        title: "نبذة عنا",
        aboutUs: "نبذة عنا",
        careers: "وظائف",
        mediaCentre: "المركز الإعلامي",
        ourPlanet: "كوكبنا",
        ourPeople: "أفرادنا",
        ourCommunities: "مجتمعاتنا",
      },
      help: {
        title: "مساعدة",
        helpContact: "المساعدة والتواصل",
        travelUpdates: "تحديثات السفر",
        specialAssistance: "مساعدة خاصة",
        faq: "أسئلة شائعة",
      },
      book: {
        title: "الحجز",
        bookFlights: "حجز الرحلات",
        travelServices: "خدمات السفر",
        transportation: "المواصلات",
        planningTrip: "التخطيط لرحلتك",
      },
      manage: {
        title: "إدارة",
        checkIn: "تسجيل الوصول",
        manageBooking: "إدارة الحجز",
        chauffeurDrive: "سائق خاص",
        flightStatus: "حالة الرحلة",
      },
      targeted: {
        newToEmirates: "جديد على طيران الإمارات — احصل على العرض",
        welcomeMessage: "مرحباً بك في طيران الإمارات. اكتشف عرضاً تمهيدياً خاصاً وابدأ رحلتك المميزة اليوم.",
        getOffer: "احصل على العرض",
        explorePremium: "استكشف المميز - جديد",
        experienceB: "التجربة ب - مميز",
        premiumDescription: "اكتشف تجربة طيران الإمارات المحسنة مع الراحة الفاخرة والخدمات الفاخرة التي تتجاوز التوقعات."
      },
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
    footer: {
      rights: "© 2025 The Emirates Group. Tous droits réservés.",
      about: {
        title: "À propos",
        aboutUs: "À propos de nous",
        careers: "Carrières",
        mediaCentre: "Centre média",
        ourPlanet: "Notre planète",
        ourPeople: "Nos équipes",
        ourCommunities: "Nos communautés",
      },
      help: {
        title: "Aide",
        helpContact: "Aide et contact",
        travelUpdates: "Mises à jour voyage",
        specialAssistance: "Assistance spéciale",
        faq: "Questions fréquentes",
      },
      book: {
        title: "Réserver",
        bookFlights: "Réserver des vols",
        travelServices: "Services de voyage",
        transportation: "Transports",
        planningTrip: "Planifier votre voyage",
      },
      manage: {
        title: "Gérer",
        checkIn: "Enregistrement",
        manageBooking: "Gérer la réservation",
        chauffeurDrive: "Chauffeur‑drive",
        flightStatus: "Statut du vol",
      },
      targeted: {
        newToEmirates: "Nouveau chez Emirates — Obtenez l'offre",
        welcomeMessage: "Bienvenue chez Emirates. Débloquez une offre d'introduction spéciale et commencez votre voyage premium aujourd'hui.",
        getOffer: "Obtenir l'offre",
        explorePremium: "Explorer Premium - Nouveau",
        experienceB: "Expérience B - Premium",
        premiumDescription: "Découvrez notre expérience Emirates améliorée avec un confort premium et des services de luxe qui dépassent les attentes."
      },
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
    footer: {
      rights: "© 2025 Grupo Emirates. Todos los derechos reservados.",
      about: {
        title: "Sobre nosotros",
        aboutUs: "Sobre nosotros",
        careers: "Empleo",
        mediaCentre: "Centro de prensa",
        ourPlanet: "Nuestro planeta",
        ourPeople: "Nuestra gente",
        ourCommunities: "Nuestras comunidades",
      },
      help: {
        title: "Ayuda",
        helpContact: "Ayuda y contacto",
        travelUpdates: "Actualizaciones de viaje",
        specialAssistance: "Asistencia especial",
        faq: "Preguntas frecuentes",
      },
      book: {
        title: "Reservar",
        bookFlights: "Reservar vuelos",
        travelServices: "Servicios de viaje",
        transportation: "Transporte",
        planningTrip: "Planificación del viaje",
      },
      manage: {
        title: "Gestionar",
        checkIn: "Check‑in",
        manageBooking: "Gestionar tu reserva",
        chauffeurDrive: "Chauffeur‑drive",
        flightStatus: "Estado del vuelo",
      },
      targeted: {
        newToEmirates: "Nuevo en Emirates — Obtén la oferta",
        welcomeMessage: "Bienvenido a Emirates. Desbloquea una oferta de introducción especial y comienza tu viaje premium hoy.",
        getOffer: "Obtener oferta",
        explorePremium: "Explorar Premium - Nuevo",
        experienceB: "Experiencia B - Premium",
        premiumDescription: "Descubre nuestra experiencia Emirates mejorada con comodidad premium y servicios de lujo que superan las expectativas."
      },
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


