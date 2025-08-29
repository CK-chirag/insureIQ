import React from "react";
import UploadSvg from "../../assets/solar_case-broken.png";
import Button from "../commonComp/Button";

const UploadPolicy: React.FC = () => {
    return (
        <div className="bg-[#061223]/50 rounded-2xl px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-6 xl:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-1 shadow-lg">
            {/* Left: Premium Analysis List */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-1">
                {[
                    {
                        title: "Premium Analysis",
                        subtitle: "AI-Powered Insights", 
                        description: "Get detailed analysis of your premium structure"
                    },
                    {
                        title: "Coverage Review",
                        subtitle: "Smart Recommendations",
                        description: "Optimize your insurance coverage with AI insights"
                    },
                    {
                        title: "Cost Optimization",
                        subtitle: "Save Money",
                        description: "Find opportunities to reduce premiums"
                    }
                ].map((item, index) => (
                    <div key={index} className="">
                        <div className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-base xl:text-lg">
                            {item.title}
                        </div>
                        <div className="text-blue-200 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                            {item.subtitle}
                        </div>
                        <div className="text-blue-300 text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm leading-relaxed">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>

            {/* Right: Upload Section */}
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-1 mt-2 sm:mt-0">
                {/* Upload Icon and Title */}
                <div className="flex flex-col items-center">
                    <div className="bg-blue-800 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2">
                        <svg 
                            width="20" 
                            height="20" 
                            className="sm:w-7 sm:h-7" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5m0 0l5 5m-5-5v12" 
                                className="text-blue-300"
                            />
                        </svg>
                    </div>
                    <div className="text-white font-bold text-lg sm:text-xl md:text-2xl text-center">
                        Upload Policy
                    </div>
                </div>

                {/* Upload Dropzone */}
                <div className="border-2 border-dashed border-blue-400 rounded-xl w-full h-16 sm:h-20 flex items-center justify-center mb-2">
                    <img 
                        src={UploadSvg} 
                        alt="Upload" 
                        className="w-6 h-6 sm:w-7 sm:h-7 opacity-70"
                    />
                </div>

                {/* Upload Button */}
                <Button 
                    className="w-full text-xs sm:text-sm py-2 sm:py-3" 
                    text="Upload Document"
                />
            </div>
        </div>
    );
};

export default UploadPolicy;