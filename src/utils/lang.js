let currentLangCode = (typeof window !== "undefined" && window.langCode) || (typeof localStorage !== "undefined" && localStorage.getItem("langCode")) || "en";

const listeners = new Set();

export function getLangCode() {
  return currentLangCode;
}

export function setLangCode(newCode) {
  if (!newCode || newCode === currentLangCode) return;
  currentLangCode = newCode;
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("langCode", newCode);
    }
  } catch (_) {}
  if (typeof window !== "undefined") {
    window.langCode = newCode;
  }
  listeners.forEach((listener) => {
    try {
      listener(newCode);
    } catch (_) {}
  });
}

export function subscribeLangCode(listener) {
  if (typeof listener !== "function") return () => {};
  listeners.add(listener);
  return () => listeners.delete(listener);
}


