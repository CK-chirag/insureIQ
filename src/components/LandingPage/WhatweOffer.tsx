import React from "react";

const offers = [
    {
        icon: (
            <span className="bg-green-500 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.16 3.24a1 1 0 01-1.45-1.05l1.18-6.88-5-4.87a1 1 0 01.55-1.7l6.91-1 3.09-6.26a1 1 0 011.8 0l3.09 6.26 6.91 1a1 1 0 01.55 1.7l-5 4.87 1.18 6.88a1 1 0 01-1.45 1.05L12 17.75z" />
                </svg>
            </span>
        ),
        title: "Automated Claim Assistance",
        badgeColor: "bg-blue-600",
        subtitle: "AI-Powered Insights",
        description: "Get detailed analysis of your premium structure",
    },
    {
        icon: (
            <span className="bg-blue-500 rounded-lg w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2a2 2 0 002 2h12a2 2 0 002-2v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </span>
        ),
        title: "Policy Genie - AI based policy guidance",
        badgeColor: "bg-blue-400",
        subtitle: "Maximize Protection",
        description: "Optimize your coverage for better protection",
    },
];

const WhatweOffer: React.FC = () => {
    return (
        <section className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto px-2 sm:px-0">
            <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 px-2 sm:px-0">
                Featured Offers
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                {offers.map((offer, idx) => (
                    <div 
                        key={idx} 
                        className="bg-[#061223]/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-start sm:items-center gap-3 sm:gap-4 shadow-md hover:shadow-lg transition w-full"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            {offer.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start sm:items-center gap-2 mb-1 flex-wrap">
                                <span className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                                    {offer.title}
                                </span>
                            </div>
                            <div className="text-blue-200 text-xs sm:text-sm md:text-base mb-1">
                                {offer.subtitle}
                            </div>
                            <div className="text-blue-300 text-xs sm:text-sm leading-relaxed">
                                {offer.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatweOffer;