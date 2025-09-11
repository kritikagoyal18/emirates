import React from "react";
import Title from "./base/Title";
import Image from "./base/Image";
import Text from "./base/Text";
import ContentFragment from "./base/ContentFragment";
import "./FlightPackage.scss";

const {REACT_APP_HOST_URI} = process.env;


const FlightPackage = ({cf, navigate}) => {
    if (!cf) return; //if cf(data) is null then return empty

    const packageImage = cf?.packageImage?._path;
    const packageTitle = cf?.packageTitle;
    const packagePrice = cf?.packagePrice;
    const packageId = cf?.packageId;
    const highlight = cf?.highlight;
    const bagsInfo = cf?.bagsInfo;
    const seatsInfo = cf?.seatsInfo;
    const refundInfo = cf?.refundInfo;
    const moreInformation = cf?.moreInformation;

    return (
        <ContentFragment
            cf={cf}
        >
            <div className={`item-tile ${highlight ? 'highlight-class' : ''}`}>
                <div className="flex-grow" style={{minHeight: '445px'}}>
                    {packageImage?.trim() && (
                        <Image className="package-image" src={packageImage} alt={`${packageTitle} illustration`}
                               prop="packageImage"/>
                    )}
                    <div className="content-container">
                        <div>
                            <div>
                                <Title heading="h3" prop="packageTitle" className={`${highlight ? 'color-light' : 'color-dark'}`}>
                                    {packageTitle}
                                </Title>
                            </div>
                            <div style={{marginBottom: '10px'}}>
                                <Text
                                    content={packagePrice}
                                    prop="packagePrice"
                                    className="font-size-large price-text"
                                />
                                <p className="price-pretext">per adult</p>
                            </div>
                        </div>
                        {bagsInfo?.html && (
                            <div className="flex flex-col mb-15">
                                <h4> Bags</h4>
                                <Text
                                    content={bagsInfo}
                                    prop="bagsInfo"
                                    className="font-size-large info-text with-icons"
                                />
                            </div>
                        )}
                        {seatsInfo?.html && (
                            <div className="flex flex-col mb-15">
                                <h4>Seats</h4>
                                <Text
                                    content={seatsInfo}
                                    prop="seatsInfo"
                                    className="font-size-large info-text with-icons"
                                />
                            </div>
                        )}
                        {refundInfo?.html && (
                            <div className="flex flex-col mb-15">
                                <h4>Changes and refunds</h4>
                                <Text
                                    content={refundInfo}
                                    prop="refundInfo"
                                    className="font-size-large info-text with-icons"
                                />
                            </div>
                        )}
                        {moreInformation?.html && (
                            <div className="flex flex-col mb-15">
                                <Text
                                    content={moreInformation}
                                    prop="moreInformation"
                                    className="font-size-large info-text with-icons enable-bullets"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="button-container">
                    <button className="select-button">Select</button>
                </div>
            </div>
        </ContentFragment>
    );
};

export default FlightPackage;
