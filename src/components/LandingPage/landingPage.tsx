import React from "react";
import Header from "./header";
import MarketingCard from "./marketingCard";
import UploadPolicy from "./uploadPolicy";
import WhatweOffer from "./WhatweOffer";
import bgImage from "../../assets/bg_image_landingPage.png";

const LandingPage: React.FC = () => {
    return (
        <div
            className="min-h-screen w-full pb-8 sm:pb-12 md:pb-16 lg:pb-20"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Header />
            
            {/* Main Content Container */}
            <div className="flex flex-col lg:flex-row w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[154px] gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4">
                
                {/* Left Side: Marketing Card (Desktop) */}
                <div className="lg:w-1/2 w-full flex items-center justify-center order-2 lg:order-1">
                    <div className="w-full max-w-md lg:max-w-none">
                        <MarketingCard />
                    </div>
                </div>
                
                {/* Right Side: Upload and Offers (Desktop) | Reordered for Mobile/Tablet */}
                <div className="lg:w-1/2 w-full flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-3 order-1 lg:order-2">
                    
                    {/* Upload Policy - First on Mobile/Tablet */}
                    <div className="w-full order-1">
                        <UploadPolicy />
                    </div>
                    
                    {/* What We Offer - Third on Mobile/Tablet (moved after MarketingCard) */}
                    <div className="w-full order-3 lg:order-2">
                        <WhatweOffer />
                    </div>
                </div>
                
            </div>

            {/* Marketing Card - Second on Mobile/Tablet (outside container for proper ordering) */}
            <div className="block lg:hidden w-full px-4 sm:px-8 md:px-16 mt-4 sm:mt-6 order-2">
                <div className="w-full max-w-md mx-auto">
                    <MarketingCard />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;