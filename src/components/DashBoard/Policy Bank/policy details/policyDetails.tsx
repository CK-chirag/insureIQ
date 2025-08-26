import React from "react";
import TopCard from "./topCard";
import LeftSideCard from "./LeftSideCard";
import RightSideAnalysis from "./rightSideAnalysis";
import { useLocation } from "react-router-dom";

const PolicyDetails: React.FC = () => {
    const location = useLocation();
    const isGroup = location.state?.isGroup || false;

    return (
        <div
            className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8"
            style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}
        >
            <TopCard isGroup={isGroup} />

            {/* Bottom Section - Two Cards Side by Side */}
            <div className="flex flex-col lg:flex-row gap-2">
                {/* Left Side Card */}
                <div className="w-full lg:w-1/2">
                    <LeftSideCard />
                </div>

                {/* Right Side Analysis */}
                <div className="w-full lg:w-1/2">
                    <RightSideAnalysis />
                </div>
            </div>
        </div>
    );
};

export default PolicyDetails;
