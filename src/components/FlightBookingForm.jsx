import React, {useCallback, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./FlightBookingForm.scss";

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const navigate = useNavigate();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    navigate("/flightlist", {});
  }, [navigate]);

  return (
    <div className="flight-booking-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="tripType">Fare</label>
            <select
              id="tripType"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              <option value="one-way">One Way</option>
              <option value="return">Return Trip</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input
              type="text"
              id="from"
              placeholder="Enter departure station"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="text"
              id="to"
              placeholder="Enter arrival station"
              required
            />
          </div>
        </div>

        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="departureDate">Depart</label>
            <input type="date" id="departureDate" required />
          </div>

            <div className="form-group">
              <label htmlFor="returnDate">Return</label>
              <input type="date" id="returnDate" required />
            </div>

          <div className="form-group">
            <label htmlFor="travelClass">Travel Class</label>
            <select id="travelClass">
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="passengers">Select Passengers</label>
            <input
              type="number"
              id="passengers"
              min="1"
              placeholder="No. of passengers"
              required
            />
          </div>
        </div>

        <button type="submit" className="find-flights-button">
          Find Flights
        </button>
      </form>
    </div>
  );
};

export default FlightBookingForm;
