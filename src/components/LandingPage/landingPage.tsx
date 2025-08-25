
import React from "react";
import Header from "./header";
import MarketingCard from "./marketingCard";
import UploadPolicy from "./uploadPolicy";
import WhatweOffer from "./WhatweOffer";
import bgImage from "../../assets/bg_image_landingPage.png";

const LandingPage: React.FC = () => {
	   return (
		   <div
			   className="min-h-screen w-full pb-20"
			   style={{
				   backgroundImage: `url(${bgImage})`,
				   backgroundSize: 'cover',
				   backgroundPosition: 'center',
				   backgroundRepeat: 'no-repeat',
			   }}
		   >
			   <Header />
			   <div className="flex flex-col md:flex-row w-full px-[154px] gap-8 mt-4">
				   {/* Left Side: Marketing Card */}
				   <div className="md:w-1/2 w-full flex items-center justify-center">
					   <MarketingCard />
				   </div>
				   {/* Right Side: UploadPolicy (top) and WhatweOffer (bottom) */}
				   <div className="md:w-1/2 w-full flex flex-col gap-3">
					   <div>
						   <UploadPolicy />
					   </div>
					   <div>
						   <WhatweOffer />
					   </div>
				   </div>
			   </div>
		   </div>
	   );
};

export default LandingPage;
