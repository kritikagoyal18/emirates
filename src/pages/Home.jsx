import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ContentFragment from "../components/base/ContentFragment";
import Hero from "../components/Hero";
import CarouselItem from "../components/CarouselItem";

import CallToActionSection from "../components/CallToActionSection";
import { useEmiratesPageBySlug } from "../api";
import "./Home.scss";
import "../components/CarouselItem.scss";
import FlightBookingForm from "../components/FlightBookingForm";
import SaleOffers from "../components/SaleOffers";
import AdobeTargetOffer from "../components/AdobeTargetOffer";


const Home = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedVariation = useMemo(
    () => searchParams.get("variation") || "master",
    [searchParams]
  );

  const { REACT_APP_HOST_URI } = process.env;

  //const { data } = usePageBySlug("home", selectedVariation, fetchTrigger);
  const { data } = useEmiratesPageBySlug("home", selectedVariation, fetchTrigger);

  /*
  const flightPackages = useMemo(() => {
    return fareTypes.map(fareType => {
      const { flightpackagedata } = useFlightPackageById("flight-package", fareType, fetchTrigger);
      return flightpackagedata;
    });
  }, [fareTypes, fetchTrigger]);
  

  const categories = useMemo(() => {
    const map = { master: "Personal Banking" };
    const variations = data?._variations;
    if (variations) {
      variations.forEach((variation) => {
        map[variation] = snakeCaseToTitleCase(variation);
      });
    }
    return map;
  }, [data?._variations]);
*/

  useEffect(() => {
    if (!searchParams.get("variation")) {
      navigate("/?variation=master");
    }
  }, [searchParams, navigate]);

      /*

  useEffect(() => {
    const scrollHandler = () => {
      const parallaxItem = document.getElementById("parallax-item");
      const scrollPosition = window.scrollY;

      const opacity = 1 - (scrollPosition / window.innerHeight) * 4;
      const initialTopPosition = 650;
      const scrollSpeed = 0.6;
      const newTopPosition = initialTopPosition + scrollPosition * scrollSpeed;

      parallaxItem.style.top = newTopPosition + "px";
      parallaxItem.style.opacity = opacity;
    };

    const updateHandler = () => {
      alert("Content Updated");
    };

    document.addEventListener("scroll", scrollHandler);
    document.addEventListener("aue:content-update", updateHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
      document.removeEventListener("aue:content-update", updateHandler);
    };
  }, []);
  */

  //if (!data || !categories.hasOwnProperty(selectedVariation)) return;
/*
  const image = data?.image?._dynamicUrl;
  const title = data?.title;
  const content = data?.content;
  const featuredServices = data?.featuredServices;
*/

  const image = REACT_APP_HOST_URI + data?.image?._path;
  const title = data?.title;
  const slug = data?.slug;
  const content = data?.content;
  const offers = data?.offers;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offers.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <ContentFragment cf={data}>
        <Hero image={image} title={title} content={content} />
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {offers?.map((offer, index) => (
              <div
                key={offer.title}
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <CarouselItem
                  title="Carousel Item"
                  cf={offer}
                  setFetchTrigger={setFetchTrigger}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control prev" onClick={handlePrev}>
            ❮
          </button>
          <button className="carousel-control next" onClick={handleNext}>
            ❯
          </button>
        </div>
        <FlightBookingForm />
      </ContentFragment>
      <AdobeTargetOffer/>
      <SaleOffers />

      <img src="https://publish-p135360-e1341441.adobeaemcloud.com/content/dam/emirates/banners/home-page-centre.png" alt="centre-image"  style={{ height: 'auto', width: '100%' }}/>
      <img src="https://publish-p135360-e1341441.adobeaemcloud.com/content/dam/emirates/banners/home-page-bottom.png" alt="bottom-image"  style={{ height: 'auto', width: '100%' }}/>

    </>
  );
};

export default Home;
