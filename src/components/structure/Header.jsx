import React, { useEffect, useRef, useState } from "react";
import { getLangCode, setLangCode } from "../../utils";
import { t } from "../../utils/i18n";
import Logo from "../Logo";
import "./Header.scss";

const Header = () => {
  const [langCode, setLangCodeState] = useState(getLangCode());

  const navigations = [
    { label: t("header.book"), href: "/services" },
    { label: t("header.manage"), href: "/articles" },
    { label: t("header.experience"), href: "/experience" },
    { label: t("header.whereWeFly"), href: "/articles" },
    { label: t("header.loyalty"), href: "/flightlist" },
    { label: t("header.help"), href: "/flightlist" }
  ];

  const isFirstRunRef = useRef(true);

  useEffect(() => {
    window.langCode = langCode;
    setLangCode(langCode);
    try {
      const { setDocumentLanguageAttributes } = require("../../utils/i18n");
      setDocumentLanguageAttributes(langCode);
    } catch (_) {}
    console.log("langCode:", langCode);
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      return;
    }
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  }, [langCode]);

  return (
    <header className="">
      <div className="container header">
        <div className="navigations-wrapper">
          <Logo variant="emirates" />
          <nav>
            {navigations.map(({ label, href }, index) => (
              <a
                key={`${href}_${index}`}
                href={href}
                className="nav-link"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="buttons-wrapper">
          <select
            aria-label="Select language"
            className="font-size-medium hover-effect"
            value={langCode}
            onChange={(e) => setLangCodeState(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="ar">AR</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <a href="#" className="nav-link">Log in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
