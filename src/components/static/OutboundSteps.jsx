import React from "react";
import './OutboundSteps.scss';

const OutboundSteps = ({ steps }) => {
    return (
        <div className="outbound-steps">
            <div
                className="ds-cr-hidden ds-cr-items-center ds-cr-justify-center ds-cr-gap-2 ds-cr-p-4 ds-cr-px-6 lg:ds-cr-flex snipcss-zL2JM">
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs"
                    data-active="true">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-bg-blue-500"
                        aria-current="Step"><span
                        className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-text-white-white">1</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Outbound</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
                <div className="ds-cr-grow" aria-hidden="true">
                    <div className="ICON ds-cr-stroke-1" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 441 6" fill="none">
                            <path
                                d="M1.33325 2.49854C1.05711 2.49854 0.833252 2.72239 0.833252 2.99854C0.833252 3.27468 1.05711 3.49854 1.33325 3.49854V2.49854ZM440.667 2.99854L435.667 0.111784V5.88529L440.667 2.99854ZM1.33325 3.49854H436.167V2.49854H1.33325V3.49854Z"
                                fill="none"></path>
                            <defs>
                                <linearGradient id="paint0_linear_611_23058" x1="1.33325" y1="2.99854" x2="458.24"
                                                y2="2.99854" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BCC4CF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#9C9FA4"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ds-cr-flex-1 ds-cr-border ds-cr-border-grey-300"></div>
                </div>
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-border ds-cr-border-midnight-blue-500 ds-cr-bg-white-white">
                        <span
                            className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-font-normal ds-cr-text-midnight-blue-500">2</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Flight summary</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
                <div className="ds-cr-grow" aria-hidden="true">
                    <div className="ICON ds-cr-stroke-1" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 441 6" fill="none">
                            <path
                                d="M1.33325 2.49854C1.05711 2.49854 0.833252 2.72239 0.833252 2.99854C0.833252 3.27468 1.05711 3.49854 1.33325 3.49854V2.49854ZM440.667 2.99854L435.667 0.111784V5.88529L440.667 2.99854ZM1.33325 3.49854H436.167V2.49854H1.33325V3.49854Z"
                                fill="none"></path>
                            <defs>
                                <linearGradient id="paint0_linear_611_23058" x1="1.33325" y1="2.99854" x2="458.24"
                                                y2="2.99854" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BCC4CF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#9C9FA4"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ds-cr-flex-1 ds-cr-border ds-cr-border-grey-300"></div>
                </div>
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-border ds-cr-border-midnight-blue-500 ds-cr-bg-white-white">
                        <span
                            className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-font-normal ds-cr-text-midnight-blue-500">3</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Seats</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
                <div className="ds-cr-grow" aria-hidden="true">
                    <div className="ICON ds-cr-stroke-1" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 441 6" fill="none">
                            <path
                                d="M1.33325 2.49854C1.05711 2.49854 0.833252 2.72239 0.833252 2.99854C0.833252 3.27468 1.05711 3.49854 1.33325 3.49854V2.49854ZM440.667 2.99854L435.667 0.111784V5.88529L440.667 2.99854ZM1.33325 3.49854H436.167V2.49854H1.33325V3.49854Z"
                                fill="none"></path>
                            <defs>
                                <linearGradient id="paint0_linear_611_23058" x1="1.33325" y1="2.99854" x2="458.24"
                                                y2="2.99854" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BCC4CF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#9C9FA4"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ds-cr-flex-1 ds-cr-border ds-cr-border-grey-300"></div>
                </div>
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-border ds-cr-border-midnight-blue-500 ds-cr-bg-white-white">
                        <span
                            className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-font-normal ds-cr-text-midnight-blue-500">4</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Passengers details</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
                <div className="ds-cr-grow" aria-hidden="true">
                    <div className="ICON ds-cr-stroke-1" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 441 6" fill="none">
                            <path
                                d="M1.33325 2.49854C1.05711 2.49854 0.833252 2.72239 0.833252 2.99854C0.833252 3.27468 1.05711 3.49854 1.33325 3.49854V2.49854ZM440.667 2.99854L435.667 0.111784V5.88529L440.667 2.99854ZM1.33325 3.49854H436.167V2.49854H1.33325V3.49854Z"
                                fill="none"></path>
                            <defs>
                                <linearGradient id="paint0_linear_611_23058" x1="1.33325" y1="2.99854" x2="458.24"
                                                y2="2.99854" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BCC4CF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#9C9FA4"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ds-cr-flex-1 ds-cr-border ds-cr-border-grey-300"></div>
                </div>
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-border ds-cr-border-midnight-blue-500 ds-cr-bg-white-white">
                        <span
                            className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-font-normal ds-cr-text-midnight-blue-500">5</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Extras</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
                <div className="ds-cr-grow" aria-hidden="true">
                    <div className="ICON ds-cr-stroke-1" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6" viewBox="0 0 441 6" fill="none">
                            <path
                                d="M1.33325 2.49854C1.05711 2.49854 0.833252 2.72239 0.833252 2.99854C0.833252 3.27468 1.05711 3.49854 1.33325 3.49854V2.49854ZM440.667 2.99854L435.667 0.111784V5.88529L440.667 2.99854ZM1.33325 3.49854H436.167V2.49854H1.33325V3.49854Z"
                                fill="none"></path>
                            <defs>
                                <linearGradient id="paint0_linear_611_23058" x1="1.33325" y1="2.99854" x2="458.24"
                                                y2="2.99854" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#BCC4CF" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#9C9FA4"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="ds-cr-flex-1 ds-cr-border ds-cr-border-grey-300"></div>
                </div>
                <div
                    className="ds-cr-flex ds-cr-flex-initial ds-cr-flex-shrink ds-cr-flex-grow ds-cr-items-center ds-cr-justify-center ds-cr-space-x-4 ds-cr-self-stretch ds-cr-font-mylius-modern ds-cr-text-xs">
                    <div
                        className="ds-cr-flex ds-cr-h-5 ds-cr-w-5 ds-cr-flex-col ds-cr-items-center ds-cr-justify-center ds-cr-rounded-full  ds-cr-border ds-cr-border-midnight-blue-500 ds-cr-bg-white-white">
                        <span
                            className="ds-cr-font-open-sans ds-cr-text-xs ds-cr-leading-5 ds-cr-tracking-wide ds-cr-text-midnight-blue-500 ds-cr-font-normal ds-cr-text-midnight-blue-500">6</span>
                    </div>
                    <span
                        className="ds-cr-ml-2 ds-cr-whitespace-nowrap ds-cr-text-base ds-cr-font-light ds-cr-leading-7 ds-cr-tracking-wide ds-cr-text-midnight-blue-500">Review and pay</span><span
                    className="ds-cr-sr-only">Incomplete.</span>
                </div>
            </div>
        </div>
    )
}
export default OutboundSteps;
