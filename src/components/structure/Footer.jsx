import React from "react";
import { t } from "../../utils/i18n";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-strip" />
        <div className="top-wrapper container">
          <div className="categories-wrapper">
            <div className="category-wrapper">
              <h5>{t("footer.about.title")}</h5>
              <nav>
                <a href="#">{t("footer.about.aboutUs")}</a>
                <a href="#">{t("footer.about.careers")}</a>
                <a href="#">{t("footer.about.mediaCentre")}</a>
                <a href="#">{t("footer.about.ourPlanet")}</a>
                <a href="#">{t("footer.about.ourPeople")}</a>
                <a href="#">{t("footer.about.ourCommunities")}</a>
              </nav>
            </div>
            <div className="category-wrapper">
              <h5>{t("footer.help.title")}</h5>
              <nav>
                <a href="#">{t("footer.help.helpContact")}</a>
                <a href="#">{t("footer.help.travelUpdates")}</a>
                <a href="#">{t("footer.help.specialAssistance")}</a>
                <a href="#">{t("footer.help.faq")}</a>
              </nav>
            </div>
            <div className="category-wrapper">
              <h5>{t("footer.book.title")}</h5>
              <nav>
                <a href="#">{t("footer.book.bookFlights")}</a>
                <a href="#">{t("footer.book.travelServices")}</a>
                <a href="#">{t("footer.book.transportation")}</a>
                <a href="#">{t("footer.book.planningTrip")}</a>
              </nav>
            </div>
            <div className="category-wrapper">
              <h5>{t("footer.manage.title")}</h5>
              <nav>
                <a href="#">{t("footer.manage.checkIn")}</a>
                <a href="#">{t("footer.manage.manageBooking")}</a>
                <a href="#">{t("footer.manage.chauffeurDrive")}</a>
                <a href="#">{t("footer.manage.flightStatus")}</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper container">
          <div className="rights-wrapper">
            <span>{t("footer.rights")}</span>
          </div>
          <div className="social-media-wrapper">
            <a href="#" aria-label="Facebook" className="icon sm">f</a>
            <a href="#" aria-label="X" className="icon sm">x</a>
            <a href="#" aria-label="LinkedIn" className="icon sm">in</a>
            <a href="#" aria-label="YouTube" className="icon sm">▶</a>
            <a href="#" aria-label="Instagram" className="icon sm">◎</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
