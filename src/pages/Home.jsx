import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ContentFragment from "../components/base/ContentFragment";
import Hero from "../components/Hero";
import { useEmiratesPageBySlug, useEmiratesLocations } from "../api";
import "./Home.scss";
import "../components/CarouselItem.scss";
import FlightBookingForm from "../components/FlightBookingForm";
import Locations from "../components/Locations";


const Home = () => {
  const [fetchTrigger, setFetchTrigger] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedVariation = useMemo(
    () => searchParams.get("variation") || "master",
    [searchParams]
  );

  const { data } = useEmiratesPageBySlug("premium-economy-banner", selectedVariation, fetchTrigger);
  const { data: locations } = useEmiratesLocations(selectedVariation, fetchTrigger);
  console.log("locations", locations);

  useEffect(() => {
    if (!searchParams.get("variation")) {
      navigate("/?variation=master");
    }
  }, [searchParams, navigate]);

  const pretitle = data?.pretitle;
  const title = data?.title;
  const description = data?.description;
  const buttonLabel = data?.buttonLabel;
  const buttonLink = data?.buttonLink;
  const image = data?.image?._authorUrl;

  return (
    <>
      <ContentFragment cf={data}>
        <Hero image={image} title={title} pretitle={pretitle} description={description} {...(buttonLabel ? { buttonLabel } : {})} {...(buttonLink ? { buttonLink } : {})} />
        <FlightBookingForm />
      </ContentFragment>
      <Locations items={locations || []} />
    </>
  );
};

export default Home;
