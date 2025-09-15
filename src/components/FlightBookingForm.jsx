import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./FlightBookingForm.scss";

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
          <button type="button" className={`tab ${activeMainTab === "search" ? "active" : ""}`} onClick={() => setActiveMainTab("search")}>Search flights</button>
          <button type="button" className="tab muted">Manage booking / Check in</button>
          <button type="button" className="tab muted">What's on your flight</button>
          <button type="button" className="tab muted">Flight status</button>
        </div>

        {activeMainTab === "search" && (
          <form onSubmit={handleSubmit} className="search-form">
            <div className="sub-tabs">
              <button type="button" className={`sub-tab ${activeSubTab === "flight" ? "active" : ""}`} onClick={() => setActiveSubTab("flight")}>Flight</button>
              <button type="button" className={`sub-tab ${activeSubTab === "flight-hotel" ? "active" : ""}`} onClick={() => setActiveSubTab("flight-hotel")}>Flight + hotel</button>
            </div>

            <div className="fields">
              <div className="field">
                <label htmlFor="from">Departure airport</label>
                <input
                  id="from"
                  type="text"
                  placeholder="New Delhi (DEL)"
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="to">Arrival airport</label>
                <input
                  id="to"
                  type="text"
                  placeholder="Arrival airport"
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                  required
                />
              </div>
              <div className="submit">
                <button type="submit" className="continue-button">Continue</button>
              </div>
            </div>

            <div className="advanced">
              <a href="#" onClick={(e) => e.preventDefault()}>Advanced search: multi-city, promo codes, partner airlines</a>
              <span className="chevron">›</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FlightBookingForm;
