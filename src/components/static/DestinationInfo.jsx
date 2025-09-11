import React from "react";
import "./DestinationInfo.scss";

const DestinationInfo = () => {
    return (
        <div className="destination-info">
            <div className="flex flex-row items-center mt-4 snipcss-ZbqJT" aria-label="London to New York">
                <h1 className="font-light text-[44px]" data-testid="flight-route-origin-city-code">London</h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="mx-2 inbound" data-testid="arrow-icon">
                    <path
                        d="M4.84808 12.0347C7.04477 12.2846 9.24146 12.422 11.4381 12.5345C13.0744 12.5995 14.7107 12.6494 16.3469 12.6494C15.3662 13.9364 14.4605 15.2759 13.5573 16.6278C13.5072 16.7105 13.4879 16.8081 13.5029 16.9036C13.5178 16.9991 13.5661 17.0862 13.6391 17.1495C13.7121 17.2129 13.8052 17.2485 13.902 17.25C13.9987 17.2514 14.0928 17.2187 14.1677 17.1576C14.6206 16.7753 15.0584 16.3804 15.4938 15.9831C16.8063 14.8054 18.0589 13.5627 19.2466 12.2596C19.4098 12.0765 19.5 11.84 19.5 11.5949C19.5 11.3498 19.4098 11.1132 19.2466 10.9301C18.8563 10.4928 18.4635 10.0655 18.0482 9.65065C16.7973 8.42364 15.5238 7.20164 14.1652 6.07959C14.0904 6.02462 13.999 5.99667 13.9061 6.00032C13.8133 6.00396 13.7244 6.03899 13.6541 6.09966C13.5837 6.16034 13.5361 6.24306 13.519 6.3343C13.5018 6.42553 13.5162 6.51988 13.5598 6.60188C14.4279 7.98882 15.3912 9.29579 16.3694 10.6003C12.5209 10.5978 8.67498 10.8005 4.84808 11.2075C4.75061 11.2245 4.66225 11.2753 4.59858 11.3509C4.53491 11.4266 4.5 11.5223 4.5 11.6211C4.5 11.7199 4.53491 11.8156 4.59858 11.8913C4.66225 11.9669 4.75061 12.0177 4.84808 12.0347Z"
                        fill="#B7B9C6"></path>
                </svg>
                <h1 className="font-light text-[44px]" data-testid="flight-destiny-city-code">New York</h1>
            </div>
            <p className="subtitle">Prices are per adult, including all taxes, fees and carrier charges.</p>
        </div>
    )
}

export default DestinationInfo;
