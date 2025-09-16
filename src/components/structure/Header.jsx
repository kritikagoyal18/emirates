import React, { useEffect, useRef, useState } from "react";
import { getLangCode, setLangCode } from "../../utils";
import Logo from "../Logo";
import "./Header.scss";

const Header = () => {
  const [langCode, setLangCodeState] = useState(getLangCode());

  const navigations = [
    { label: "Book", href: "/services" },
    { label: "Manage", href: "/articles" },
    { label: "Experience", href: "/experience" },
    { label: "Where We Fly", href: "/articles" },
    { label: "Loyalty", href: "/flightlist" },
    { label: "Help", href: "/flightlist" }
  ];

  const isFirstRunRef = useRef(true);

  useEffect(() => {
    window.langCode = langCode;
    setLangCode(langCode);
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
