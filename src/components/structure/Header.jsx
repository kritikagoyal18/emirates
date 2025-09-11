import React from "react";
import Logo from "../Logo";
import RedirectButton from "../RedirectButton";
import "./Header.scss";

const Header = () => {
  const navigations = [
    { label: "Discover", href: "/services" },
    { label: "Book", href: "/articles" },
    { label: "Manage", href: "/flightlist" },
    { label: "Help", href: "/articles" }
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
          <Logo variant="british" />
        </div>
        <div className="buttons-wrapper">
          <RedirectButton className="transparent font-size-medium hover-effect">
            Login
          </RedirectButton>
          <Logo variant="oneWorldLogo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
