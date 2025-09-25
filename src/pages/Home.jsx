import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ContentFragment from "../components/base/ContentFragment";
import Hero from "../components/Hero";
import { useEmiratesPageBySlug, useEmiratesLocations } from "../api";
import "./Home.scss";
import "../components/CarouselItem.scss";
import FlightBookingForm from "../components/FlightBookingForm";
import Locations from "../components/Locations";


const Home = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedVariation = useMemo(
    () => searchParams.get("variation") || "master",
    [searchParams]
  );

  const { data } = useEmiratesPageBySlug("premium-economy-banner", selectedVariation, fetchTrigger);
  const { data: locations } = useEmiratesLocations(selectedVariation, fetchTrigger);

  const pretitle = data?.pretitle;
  const title = data?.title;
  const description = data?.description;
  const buttonLabel = data?.buttonLabel;
  const buttonLink = data?.buttonLink;
  const image = data?.image?._publishUrl || data?.image?._authorUrl;

  // Announce SPA view to Adobe Target VEC so visual edits apply on Home
  useEffect(() => {
    try {
      if (window && window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === "function") {
        window.adobe.target.triggerView("home-page");
      }
    } catch (e) {
      // no-op: Target not ready
    }
  }, []);

  return (
    <>
      <ContentFragment cf={data} label="Hero">
        <div className="home-hero-section" data-at-element="home-hero" suppressHydrationWarning>
          <Hero className="home-hero vec-targetable" image={image} title={title} pretitle={pretitle} description={description} overlay={"linear-gradient(90deg,rgba(0,0,0,.42) 50vw,transparent calc(50vw + 1100px))"} {...(buttonLabel ? { buttonLabel } : {})} {...(buttonLink ? { buttonLink } : {})} />
        </div>
        <FlightBookingForm />
      </ContentFragment>
      <img src="https://author-p135360-e1341441.adobeaemcloud.com/content/dam/emirates-flybetter/images/image3.png" alt="centre-image"  style={{ height: 'auto', width: '100%' }}/>
      <Locations items={locations || []} />
      <img src="https://author-p135360-e1341441.adobeaemcloud.com/content/dam/emirates-flybetter/images/image1.png" alt="centre-image"  style={{ height: 'auto', width: '100%' }}/>
      <img src="https://author-p135360-e1341441.adobeaemcloud.com/content/dam/emirates-flybetter/images/image2.png" alt="centre-image"  style={{ height: 'auto', width: '100%' }}/>
    </>
  );
};

export default Home;
