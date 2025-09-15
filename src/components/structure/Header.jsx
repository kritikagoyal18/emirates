import React from "react";
import Logo from "../Logo";
import RedirectButton from "../RedirectButton";
import "./Header.scss";

const Header = () => {
  const navigations = [
    { label: "Book", href: "/services" },
    { label: "Manage", href: "/articles" },
    { label: "Experience", href: "/experience?variation=master" },
    { label: "Where We Fly", href: "/articles" },
    { label: "Loyalty", href: "/flightlist" },
    { label: "Help", href: "/flightlist" }
  ];

  return (
    <header className="">
      <div className="container header">
        <div className="navigations-wrapper">
          <nav>
            {navigations.map(({ label, href }, index) => (
              <a
                key={`${href}_${index}`}
                href={href}
                className="font-size-large font-weight-medium color-light hover-effect"
              >
                {label}
              </a>
            ))}
          </nav>
          <Logo variant="emirates" />
        </div>
        <div className="buttons-wrapper">
          <RedirectButton className="transparent font-size-medium hover-effect">
            LOG IN
          </RedirectButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
