
import React from "react";
import bgImage from "../../assets/bg_image_landingPage.png";

const SideSection: React.FC = () => {
	return (
		<div
			className="hidden lg:flex flex-col justify-center items-center w-full min-h-screen text-white px-12"
			style={{
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className="w-full max-w-xl mx-auto">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
					We help you hire the right company with confidence<span className="text-purple-500">.</span>
				</h1>
				<p className="text-lg mb-4">We are trusted by +300k businesses worldwide</p>
				<div className="flex flex-wrap gap-4 mt-6">
					{[...Array(10)].map((_, i) => (
						<div key={i} className="flex items-center gap-2 bg-black/40 rounded-lg px-3 py-2">
							<span className="bg-gray-800 text-white rounded px-2 py-1 text-xs font-bold">A</span>
							<span className="text-gray-300 font-semibold">LinkedIn</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideSection;
