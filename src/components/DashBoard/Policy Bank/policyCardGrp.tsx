import React from "react";
import Button from "../../commonComp/Button";
import { useNavigate } from "react-router-dom";

const PolicyCardInd: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
            className="relative z-0 bg-white rounded-xl border-2 border-[var(--color-custom-blue)] p-6 shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:shadow-lg"
            style={{ minWidth: 320, maxWidth: 400, fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}
            onClick={() => navigate("/policy-details")}
        >
            {/* Popular badge */}
            <div className="absolute -top-4 left-0 w-[315px] flex justify-center z-10 gap-2">
                <span className="bg-[var(--color-custom-blue)] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">Popular</span>
                <span className="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">Group</span>
            </div>
            {/* Card Content */}
            <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-100 text-green-600 rounded-full p-2">
                    {/* Heart Icon */}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.01 13.44 5.61C13.97 4.01 15.64 3 17.38 3C20.46 3 22.88 5.42 22.88 8.5C22.88 13.5 15.88 21 12 21Z" strokeWidth="2" /></svg>
                </span>
                <div>
                    <div className="font-semibold text-lg text-gray-900">Comprehensive Health Plus</div>
                    <div className="text-sm text-gray-500">HealthSecure Pro</div>
                </div>
            </div>
            {/* Price and Coverage */}
            <div className="flex justify-between items-center mb-1">
                <div>
                    <div className="text-[1.6rem] font-bold text-[var(--color-custom-blue)] leading-none">$280/month</div>
                    <div className="text-xs text-gray-500">Premium</div>
                </div>
                <div className="text-lg font-bold text-green-600">$750,000
                    <div className="text-xs text-gray-500 font-normal">Coverage</div>
                </div>
            </div>
            {/* Rating */}
            <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                    {/* 4 stars filled, 1 empty */}
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    ))}
                    <svg width="18" height="18" fill="#E0E0E0" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                </div>
                <span className="text-gray-600 text-sm">4.8/5</span>
            </div>
            {/* Key Features */}
            <div className="mb-4">
                <div className="font-semibold text-base mb-1">Key Features:</div>
                <ul className="text-gray-700 text-sm space-y-1">
                    <li className="flex items-center gap-2"><span className="text-green-500"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" strokeWidth="2" /></svg></span>Cashless hospitalization</li>
                    <li className="flex items-center gap-2"><span className="text-green-500"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" strokeWidth="2" /></svg></span>Pre & post hospitalization coverage</li>
                    <li className="flex items-center gap-2"><span className="text-green-500"><svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" strokeWidth="2" /></svg></span>Day care procedures</li>
                </ul>
            </div>
            {/* Download Button */}
            <div className="flex flow-row gap-4 mt-2">
                <Button text="Download" type="button" className="w-full bg-[var(--color-custom-blue)] text-white font-normal text-base py-3 rounded-lg" />
                <Button text="Manage Group" type="button" className="w-full bg-[var(--color-custom-blue)] text-white font-normal text-base py-3 rounded-lg" />
            </div>
        </div>
    );
};

export default PolicyCardInd;
