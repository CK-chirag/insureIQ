import React from "react";
import { useNavigate } from "react-router-dom";

interface TopCardProps {
    isGroup?: boolean;
}

const TopCard: React.FC<TopCardProps> = ({ isGroup }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-xl shadow-sm px-8 py-6 flex flex-col gap-2 w-full" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex flex-row gap-4 items-start justify-start">
                        <button
                            type="button"
                            className="p-2 rounded-lg hover:bg-gray-100 transition group flex items-center justify-center"
                        >
                            <img
                                onClick={() => navigate("/dashboard")}
                                className="w-[24px] h-[24px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                                alt="logout"
                            />
                        </button>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                Health Insurance
                            </h2>
                            <p className="text-sm text-gray-400">Policy No: 1234567890</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-4">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full h-fit mt-1">
                        Active
                    </span>
                    {isGroup && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full h-fit mt-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white">
                            Manage Group
                        </span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8 mt-4">
                <div>
                    <div className="text-xs text-gray-400 mb-1">Insurer</div>
                    <div className="font-semibold text-gray-700">SecureLife Health</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400 mb-1">Coverage Amount</div>
                    <div className="font-semibold text-gray-700">$500,000</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400 mb-1">Effective Date</div>
                    <div className="font-semibold text-gray-700">Jan 1, 2023</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400 mb-1">Policyholder</div>
                    <div className="font-semibold text-gray-700">Sophia Carter</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400 mb-1">Premium</div>
                    <div className="font-semibold text-gray-700">$300 / month</div>
                </div>
                <div>
                    <div className="text-xs text-gray-400 mb-1">Renewal Date</div>
                    <div className="font-semibold text-gray-700">Jan 1, 2024</div>
                </div>
            </div>
        </div>
    );
};

export default TopCard;