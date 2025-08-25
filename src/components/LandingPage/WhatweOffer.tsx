
import React from "react";

const offers = [
	{
		icon: (
			<span className="bg-green-500 rounded-lg w-10 h-10 flex items-center justify-center">
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.75l-6.16 3.24a1 1 0 01-1.45-1.05l1.18-6.88-5-4.87a1 1 0 01.55-1.7l6.91-1 3.09-6.26a1 1 0 011.8 0l3.09 6.26 6.91 1a1 1 0 01.55 1.7l-5 4.87 1.18 6.88a1 1 0 01-1.45 1.05L12 17.75z" />
				</svg>
			</span>
		),
		title: "Premium Analysis",
		badge: "Popular",
		badgeColor: "bg-blue-600",
		subtitle: "AI-Powered Insights",
		description: "Get detailed analysis of your premium structure",
	},
	{
		icon: (
			<span className="bg-blue-500 rounded-lg w-10 h-10 flex items-center justify-center">
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2a2 2 0 002 2h12a2 2 0 002-2v-2c0-2.66-5.33-4-8-4z" />
				</svg>
			</span>
		),
		title: "Coverage Optimizer",
		badge: "New",
		badgeColor: "bg-blue-400",
		subtitle: "Maximize Protection",
		description: "Optimize your coverage for better protection",
	},
];

const WhatweOffer: React.FC = () => {
	return (
		<section className="w-[570px] max-w-xl md:max-w-2xl mx-auto mt-8">
			<h2 className="text-white text-xl md:text-2xl font-bold mb-4">Featured Offers</h2>
			<div className="flex flex-col gap-5">
				{offers.map((offer, idx) => (
					<div key={idx} className="bg-[#061223]/50 rounded-2xl p-5 flex items-center justify-between shadow-md hover:shadow-lg transition w-full">
						<div className="flex items-center gap-4">
							{offer.icon}
							<div>
								<div className="flex items-center gap-2 mb-1">
									<span className="text-white font-semibold text-base md:text-md">{offer.title}</span>
									<span className={`text-xs font-semibold px-2 py-1 rounded ${offer.badgeColor} text-white`}>{offer.badge}</span>
								</div>
								<div className="text-blue-200 text-xs md:text-base">{offer.subtitle}</div>
								<div className="text-blue-300 text-xs md:text-sm">{offer.description}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhatweOffer;
