import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ContentFragment from "../components/base/ContentFragment";
import Hero from "../components/Hero";
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

  return (
    <>
      <ContentFragment cf={data} label="Hero">
        <Hero className="experience-hero" image={image} title={title} pretitle={pretitle} description={description} {...(buttonLabel ? { buttonLabel } : {})} {...(buttonLink ? { buttonLink } : {})} />
      </ContentFragment>
      
      {/* Adobe Target A/B Test Area - Managed from Adobe Target Interface */}
      <AdobeTargetOffer mboxName="emirates-experience-ab-test" />
      
      <CabinDetails items={cabinDetails || []} />
    </>
  );
};

export default Experience;
