import React from "react";
import "./TimelineInfo.scss";

const TimelineInfo = () => {
    return  (
        <div className="timeline-info">
            <div className="flex-1 snipcss-afA4A style-cSpIg" id="style-cSpIg">
                <div className="flex flex-row bg-white" data-testid="ribbon-calendar">
                    <button className="px-2 block" data-testid="ribbon-calendar-nav-button-left"
                            aria-label="Show previous 7 days. By clicking, flight results will be updated.">
                        <div className="content-center flex justify-end bg-gray-200 rounded-lg">
                            <div className="ICON" data-testid="arrow-left--icon" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                                    <path
                                        d="M12.7679 8.02312C11.3035 8.18972 9.83903 8.28135 8.37457 8.35632C7.28373 8.39964 6.19289 8.43296 5.10205 8.43296C5.75589 9.29094 6.35969 10.1839 6.96182 11.0852C6.99523 11.1403 7.00808 11.2054 6.9981 11.2691C6.98812 11.3327 6.95595 11.3908 6.90726 11.433C6.85858 11.4753 6.79652 11.499 6.73203 11.5C6.66755 11.501 6.60479 11.4791 6.55484 11.4384C6.25294 11.1835 5.96105 10.9203 5.67082 10.6554C4.79579 9.87028 3.96077 9.0418 3.1689 8.17306C3.06011 8.05102 3 7.89331 3 7.72991C3 7.5665 3.06011 7.40879 3.1689 7.28675C3.4291 6.9952 3.69097 6.71032 3.96785 6.43377C4.80182 5.61576 5.65081 4.80109 6.5565 4.05306C6.60643 4.01641 6.66733 3.99778 6.72924 4.00021C6.79115 4.00264 6.8504 4.02599 6.89729 4.06644C6.94418 4.10689 6.97593 4.16204 6.98735 4.22287C6.99877 4.28369 6.98918 4.34658 6.96015 4.40125C6.38137 5.32588 5.73921 6.19719 5.08704 7.06684C7.65273 7.0652 10.2167 7.20033 12.7679 7.47168C12.8329 7.483 12.8918 7.51686 12.9343 7.5673C12.9767 7.61773 13 7.68151 13 7.7474C13 7.81329 12.9767 7.87707 12.9343 7.9275C12.8918 7.97794 12.8329 8.0118 12.7679 8.02312Z"
                                        fill="#021B41"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                    <div role="tablist" className="flex flex-row flex-grow"><span data-testid="ribbon"
                                                                                  className="relative flex flex-1 items-end"><button
                        aria-label=" first option of 7. Sunday, January 26, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-1" data-testid="tab-1"
                        aria-controls="content-for-calendar-ribbon"
                        className="flex-1 bg-white  px-2 md:px-8 py-4 rounded-tl-lg " tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Sun Jan 26</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label=" second option of 7. Monday, January 27, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-2" data-testid="tab-2"
                        aria-controls="content-for-calendar-ribbon" className="flex-1 bg-white  px-2 md:px-8 py-4  "
                        tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Mon Jan 27</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label=" third option of 7. Tuesday, January 28, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-3" data-testid="tab-3"
                        aria-controls="content-for-calendar-ribbon" className="flex-1 bg-white  px-2 md:px-8 py-4  "
                        tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Tue Jan 28</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label="Selected option. fourth option of 7. Wednesday, January 29, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="true" id="tab-4" data-testid="tab-4"
                        aria-controls="content-for-calendar-ribbon"
                        className="flex-1 after:absolute after:top-[79px] after:left-[1px] after:right-[1px] after:h-1 after:content-['']  border-b-[2px] border-primary-blue-500 py-[14px] px-2 md:px-8 py-4  "
                        tabIndex="0"><span>
                        <p className="font-mylius-modern text-primary-blue-500 text-xs font-light leading-5 tracking-0.048">Selected</p>
                        <p className="text-primary-blue-500 text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Wed Jan 29</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label=" fifth option of 7. Thursday, January 30, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-5" data-testid="tab-5"
                        aria-controls="content-for-calendar-ribbon" className="flex-1 bg-white  px-2 md:px-8 py-4  "
                        tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Thu Jan 30</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label=" sixth option of 7. Friday, January 31, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-6" data-testid="tab-6"
                        aria-controls="content-for-calendar-ribbon" className="flex-1 bg-white  px-2 md:px-8 py-4  "
                        tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Fri Jan 31</p>
                    </span></button></span><span data-testid="ribbon" className="relative flex flex-1 items-end"><button
                        aria-label=" seventh option of 7. Saturday, February 01, 2025, from £2,097. Search flights on this date."
                        role="tab" aria-selected="false" id="tab-7" data-testid="tab-7"
                        aria-controls="content-for-calendar-ribbon"
                        className="flex-1 bg-white  px-2 md:px-8 py-4  rounded-tr-lg" tabIndex="0"><span>
                        <p className=" text-midnight-500 font-mylius-modern text-xl font-light leading-7 tracking-wider">£2,097</p>
                        <p className="text-midnight-500 text-xs font-mylius-modern font-light leading-5 tracking-tight">Sat Feb 01</p>
                    </span></button></span></div>
                    <button className="px-2 block" data-testid="ribbon-calendar-nav-button-right"
                            aria-label="Show next 7 days. By clicking, flight results will be updated.">
                        <div className="content-center flex justify-end bg-gray-200 rounded-lg">
                            <div className="ICON" data-testid="arrow-right--icon" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"
                                     fill="none">
                                    <path
                                        d="M3.23205 7.97688C4.69651 7.81028 6.16097 7.71865 7.62543 7.64368C8.71627 7.60036 9.80711 7.56704 10.8979 7.56704C10.2441 6.70906 9.64031 5.81609 9.03818 4.91478C9.00477 4.85969 8.99192 4.79457 9.0019 4.73093C9.01188 4.66729 9.04405 4.60922 9.09274 4.56697C9.14142 4.52473 9.20348 4.50102 9.26797 4.50003C9.33245 4.49905 9.39521 4.52085 9.44516 4.56159C9.74706 4.81649 10.039 5.07972 10.3292 5.34461C11.2042 6.12972 12.0392 6.9582 12.8311 7.82694C12.9399 7.94898 13 8.10669 13 8.27009C13 8.4335 12.9399 8.59121 12.8311 8.71325C12.5709 9.00479 12.309 9.28968 12.0322 9.56623C11.1982 10.3842 10.3492 11.1989 9.44349 11.9469C9.39357 11.9836 9.33267 12.0022 9.27076 11.9998C9.20885 11.9974 9.1496 11.974 9.10271 11.9336C9.05582 11.8931 9.02406 11.838 9.01265 11.7771C9.00123 11.7163 9.01082 11.6534 9.03985 11.5987C9.61863 10.6741 10.2608 9.8028 10.913 8.93316C8.34727 8.9348 5.78332 8.79967 3.23205 8.52832C3.16707 8.517 3.10817 8.48314 3.06572 8.4327C3.02327 8.38226 3 8.31849 3 8.2526C3 8.18671 3.02327 8.12293 3.06572 8.0725C3.10817 8.02206 3.16707 7.9882 3.23205 7.97688Z"
                                        fill="#021B41"></path>
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TimelineInfo;
