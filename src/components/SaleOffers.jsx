import React from "react";
import SO1 from "../assets/barcelona.jpg"
import SO2 from "../assets/dubai.jpg"
import SO3 from "../assets/rome.jpg"
import SO4 from "../assets/london.jpg"
import "./SaleOffers.scss";

const SaleOffers = ({}) => {
  return (
    <div className="so-block">
      <div className="so-wrapper">

          <div className="so-header">
            <div className="so-header-text">Featured destinations from across the world</div>
            <div className="so-header-title">SALE OFFERS</div>
          </div>

          <div className="so-tiles">

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO1} alt="Emirates" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Barcelona flights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£434</div>
                  <div className="so-text">Discover for yourself</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO2} alt="Emirates" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Dubai flights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£441</div>
                  <div className="so-text">Discover for yourself</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO3} alt="Emirates" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">Rome flights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£739</div>
                  <div className="so-text">Discover for yourself</div>
                </div>
              </div>
            </div>

            <div className="so-tile">
              <div className="so-tile-wrapper">
                <div className="so-img-content">
                  <img src={SO4} alt="Emirates" className="so-img" />
                </div>
                <div className="so-text-content">
                  <div className="so-title">London flights</div>
                  <div className="so-from">From</div>
                  <div className="so-price">£599</div>
                  <div className="so-text">Discover for yourself</div>
                </div>
              </div>
            </div>

          </div>

      </div>
    </div>
  );
};

export default SaleOffers;
