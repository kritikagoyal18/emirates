import React from "react";
import SO1 from "../assets/sale-offer-1.jpg"
import SO2 from "../assets/sale-offer-2.jpg"
import SO3 from "../assets/sale-offer-3.jpg"
import SO4 from "../assets/sale-offer-4.jpg"
import "./SaleOffers.scss";

const SaleOffers = ({}) => {
  return (
    <div className="so-block">
      <div className="so-wrapper">

          <div className="so-header">
            <div className="so-header-text">Take your pick from our best</div>
            <div className="so-header-title">SALE OFFERS</div>
          </div>

          <div className="so-tiles">

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO1} alt="British Airways" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Miami flights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£434</div>
                  <div className="so-text">Return from London, Mar 2025</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO2} alt="British Airways" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Flights to St Lucia</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£441</div>
                  <div className="so-text">Return from London, Mar 2025</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO3} alt="British Airways" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Barbados. flights + 7 nights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£739</div>
                  <div className="so-text">Per person from London, Sep 2025</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO4} alt="British Airways" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">New York flights + 3 nights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£599</div>
                  <div className="so-text">Per person from London, Feb 2025</div>
                </div>
              </div>
            </div>

          </div>

      </div>
    </div>
  );
};

export default SaleOffers;
