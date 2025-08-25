
import React from "react";
import UploadSvg from "../../assets/solar_case-broken.png";
import Button from "../commonComp/Button";

const UploadPolicy: React.FC = () => {
	return (
		<div className="bg-[#061223]/50 rounded-2xl px-10 py-6 md:p-10 w-full max-w-md md:max-w-xl mx-auto flex flex-col md:flex-row gap-1 shadow-lg">
			{/* Left: Premium Analysis List */}
			<div className="flex flex-col gap-6 flex-1">
				{[1,2,3].map((item) => (
					<div key={item} className="">
						<div className="text-white font-semibold text-base md:text-md">Premium Analysis</div>
						<div className="text-blue-200 text-xs md:text-base">AI-Powered Insights</div>
						<div className="text-blue-300 text-xs md:text-sm">Get detailed analysis of your premium structure</div>
					</div>
				))}
			</div>
			{/* Right: Upload Section */}
			<div className="flex flex-col items-center justify-center gap-8 flex-1">
				<div className="flex flex-col items-center">
					<div className="bg-blue-800 rounded-full pt-0 w-12 h-12 flex items-center justify-center mb-2">
						<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-300">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5m0 0l5 5m-5-5v12" />
						</svg>
					</div>
					<div className="text-white font-bold text-xl md:text-2xl">Upload Policy</div>
				</div>
				<div className="border-2 border-dashed border-blue-400 rounded-xl w-full h-20 flex items-center justify-center mb-2">
					<img src={UploadSvg} alt="Upload" width={28} height={28} />
				</div>
                <Button className="w-full" text="Upload Document"/>
			</div>
		</div>
	);
};

export default UploadPolicy;
