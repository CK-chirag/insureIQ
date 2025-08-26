
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="w-full px-[165px] pt-[60px] pb-6 flex items-center justify-between bg-transparent">
			{/* Left: Logo and Title */}
			<div className="flex items-center gap-3">
				<div className="rounded-lg w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'var(--color-custom-blue)' }}>
					<span className="text-white font-bold text-lg">P</span>
				</div>
				<div className="flex flex-col">
					<span className="text-white font-semibold text-lg leading-tight">PolicyAI</span>
					<span className="text-gray-300 text-xs leading-tight">Smart Insurance Solutions</span>
				</div>
			</div>
			{/* Right: Login/Signup Button */}
			<Link to="/onboard">
				<button className="border border-gray-400 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-700 transition">
					Login / Sign Up
				</button>
			</Link>
		</header>
	);
};

export default Header;
