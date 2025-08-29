import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[165px] pt-8 sm:pt-12 md:pt-[60px] pb-6 flex items-center justify-between bg-transparent">
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-2 sm:gap-3">
                <div className="rounded-lg w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center" style={{ backgroundColor: 'var(--color-custom-blue)' }}>
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">P</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg leading-tight">
                        <span className="block sm:inline">InsureVault</span>
                    </span>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-xs leading-tight hidden xs:block">
                        Smart Insurance Solutions
                    </span>
                </div>
            </div>

            {/* Right: Login/Signup Button */}
            <Link to="/onboard">
                <button className="border border-gray-400 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-md text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap">
                    <span className="hidden sm:inline">Login / Sign Up</span>
                    <span className="sm:hidden">Login</span>
                </button>
            </Link>
        </header>
    );
};

export default Header;