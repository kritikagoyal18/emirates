import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./FlightBookingForm.scss";
import { t } from "../utils/i18n";

const FlightBookingForm = () => {
  const [activeMainTab, setActiveMainTab] = useState("search");
  const [activeSubTab, setActiveSubTab] = useState("flight");
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    navigate("/flightlist", {});
  }, [navigate]);

  return (
    <div className="flight-booking-form">
      <div className="booking-card">
        <div className="main-tabs">
          <button type="button" className={`tab ${activeMainTab === "search" ? "active" : ""}`} onClick={() => setActiveMainTab("search")}>{t("booking.tabs.search")}</button>
          <button type="button" className="tab muted">{t("booking.tabs.manage")}</button>
          <button type="button" className="tab muted">{t("booking.tabs.whatsOn")}</button>
          <button type="button" className="tab muted">{t("booking.tabs.status")}</button>
        </div>

        {activeMainTab === "search" && (
          <form onSubmit={handleSubmit} className="search-form">
            <div className="sub-tabs">
              <button type="button" className={`sub-tab ${activeSubTab === "flight" ? "active" : ""}`} onClick={() => setActiveSubTab("flight")}>{t("booking.flight")}</button>
              <button type="button" className={`sub-tab ${activeSubTab === "flight-hotel" ? "active" : ""}`} onClick={() => setActiveSubTab("flight-hotel")}>{t("booking.flightHotel")}</button>
            </div>
            <div className="advanced">
              <a href="#" onClick={(e) => e.preventDefault()}>{t("booking.advanced")}</a>
              <span className="chevron">›</span>
            </div>
            <div className="fields">
              <div className="field">
                <label htmlFor="from">{t("booking.departure")}</label>
                <input
                  id="from"
                  type="text"
                  placeholder={t("booking.placeholders.departure")}
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="to">{t("booking.arrival")}</label>
                <input
                  id="to"
                  type="text"
                  placeholder={t("booking.placeholders.arrival")}
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                  required
                />
              </div>
              <div className="submit">
                <button type="submit" className="continue-button">{t("booking.continue")}</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FlightBookingForm;
