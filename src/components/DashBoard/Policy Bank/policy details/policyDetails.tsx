import React, { useState } from "react";
import TopCard from "./topCard";
import LeftSideCard from "./LeftSideCard";
import RightSideAnalysis from "./rightSideAnalysis";
import RightList from "./rightList";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "../../../commonComp/Button";

const PolicyDetails: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isGroup = location.state?.isGroup || false;
    const completionPercentage = location.state?.completionPercentage ?? 100;
    const isExpiringSoon = location.state?.isExpiringSoon || false;

    // Toggle state: true = show list, false = show analysis/genie
    const [showList, setShowList] = useState(true);

    return (
        <div
            className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 lg:px-16 space-y-8"
            style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}
        >
            <div className="flex flex-row item-centre justify-between">
                <div className="flex flex-row gap-4 items-start justify-start">
                    <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-gray-100 transition group flex items-center justify-center"
                    >
                        <img
                            onClick={() => navigate('/dashboard')}
                            className="w-[24px] h-[24px] mx-auto transition-transform duration-200 group-hover:scale-125"
                            src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                            alt="logout"
                        />
                    </button>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Policy Detail
                    </h1>
                </div>
                {isGroup && (
                    <Button
                        icon={
                            showList ? (
                                <svg
                                    fill="#ffffff"
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    version="1.2"
                                    baseProfile="tiny"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM20 15c.69 0 1.315-.279 1.768-.731.453-.452.732-1.077.732-1.769 0-.69-.279-1.315-.732-1.768-.453-.453-1.078-.732-1.768-.732-.691 0-1.316.279-1.769.732-.452.453-.731 1.078-.731 1.768 0 .691.279 1.316.731 1.769s1.078.731 1.769.731zM20 15.59c-1.331 0-2.332.406-2.917.968-1.115-.917-2.878-1.558-5.083-1.558-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.974-2.908-.974-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732.453-.453.732-1.078.732-1.768 0-.689-.279-1.314-.732-1.768-.453-.452-1.078-.732-1.768-.732-.691 0-1.316.28-1.769.732-.452.454-.731 1.079-.731 1.768 0 .69.279 1.315.731 1.768.453.453 1.078.732 1.769.732z"></path>
                                </svg>                                
                            ) : (
                                // Analysis SVG icon
                                <svg
                                    width="16px"
                                    height="16px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4 17V13M9 17V9M14 17V5M19 17V11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>                                
                            )
                        }
                        text={showList ? "Manage Group" : "See Genie Analysis"}
                        onClick={() => setShowList((prev) => !prev)}
                    />
                )}
            </div>

            {/* Bottom Section - Two Cards Side by Side */}
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
                {/* Left Side: TopCard above LeftSideCard */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <TopCard 
                        isGroup={isGroup}
                        completionPercentage={completionPercentage}
                        isExpiringSoon={isExpiringSoon}
                    />
                    <LeftSideCard />
                </div>

                {/* Right Side: Toggle between List and Analysis */}
                <div className="w-full lg:w-1/2">
                    {showList ? <RightSideAnalysis /> : <RightList />}
                </div>
            </div>
        </div>
    );
};

export default PolicyDetails;