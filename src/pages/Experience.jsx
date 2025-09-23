import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ContentFragment from "../components/base/ContentFragment";
import Hero from "../components/Hero";
import MVTHero from "../components/MVTHero";
import MVTCabinDetails from "../components/MVTCabinDetails";
import AdobeTargetOffer from "../components/AdobeTargetOffer";

import { useEmiratesExperienceBanner, useCabinDetails } from "../api";
import "./Home.scss";
import "./Experience.scss";
import "../components/CarouselItem.scss";
import CabinDetails from "../components/CabinDetails";


const Experience = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const [searchParams] = useSearchParams();
  const selectedVariation = useMemo(
    () => searchParams.get("variation") || "master",
    [searchParams]
  );

  const { data } = useEmiratesExperienceBanner("experience-banner", selectedVariation, fetchTrigger);
  const { data: cabinDetails } = useCabinDetails(selectedVariation, fetchTrigger);

  const pretitle = data?.pretitle;
  const title = data?.title;
  const description = data?.description;
  const buttonLabel = data?.buttonLabel;
  const buttonLink = data?.buttonLink;
  const image = data?.image?._publishUrl || data?.image?._authorUrl;

  // Announce SPA view to Adobe Target VEC so visual edits apply on this page
  useEffect(() => {
    try {
      if (window && window.adobe && window.adobe.target && typeof window.adobe.target.triggerView === "function") {
        window.adobe.target.triggerView("experience-page");
      }
    } catch (e) {
      // no-op: Target not ready
    }
  }, []);

  return (
    <>
      <ContentFragment cf={data} label="Hero">
        <div className="experience-hero-section" data-at-element="hero-section" suppressHydrationWarning>
          <Hero className="experience-hero vec-targetable" image={image} title={title} pretitle={pretitle} description={description} {...(buttonLabel ? { buttonLabel } : {})} {...(buttonLink ? { buttonLink } : {})} />
        </div>
      </ContentFragment>
      
      {/* MVT Test Area - Multivariate Testing */}
      <MVTHero mboxName="emirates-hero-mvt" />
      
      {/* Adobe Target A/B Test Area - Managed from Adobe Target Interface */}
      <AdobeTargetOffer mboxName="emirates-experience-ab-test" />
      
      {/* MVT Cabin Details Test Area updated */}
      <MVTCabinDetails mboxName="emirates-cabin-mvt" items={cabinDetails || []} />
      
      {/* VEC-targetable cabin details for visual editing */}
      <div 
        className="cabin-details-section vec-targetable"
        data-at-element="cabin-details"
        suppressHydrationWarning
      >
        <CabinDetails items={cabinDetails || []} />
      </div>
    </>
  );
};

export default Experience;
