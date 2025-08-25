
import React from "react";
import bgImage from "../../assets/bg_image_landingPage.png";

interface SideSectionProps {
	variant?: 'login' | 'signup';
}

const SideSection: React.FC<SideSectionProps> = ({ variant = 'login' }) => {
	let h1Text = '';
	let pText = '';
	if (variant === 'login') {
		h1Text = 'We help you hire the right company with confidence';
		pText = 'Sign in now to manage policies quickly and easily !!';
	} else {
		h1Text = 'Join InsureIQ and unlock smarter insurance management';
		pText = 'Sign up to access exclusive features and insights.';
	}
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
					{h1Text}
					<span className="text-purple-500">.</span>
				</h1>
				<p className="text-lg mb-4">{pText}</p>
			</div>
		</div>
	);
};

export default SideSection;
