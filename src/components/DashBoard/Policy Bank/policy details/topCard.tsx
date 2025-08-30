import React from "react";

interface TopCardProps {
    isGroup?: boolean;
    completionPercentage?: number;
    isExpiringSoon?: boolean;
}

const TopCard: React.FC<TopCardProps> = ({
    isGroup,
    completionPercentage = 100,
    isExpiringSoon = false
}) => {
    return (
        <div className="bg-white rounded-xl shadow-sm px-8 py-6 flex flex-col gap-2 w-full" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex flex-row gap-4 items-start justify-start">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">
                                Health Insurance
                            </h2>
                            <p className="text-sm text-gray-400">Policy No: 1234567890</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-2 mt-2">
                    {completionPercentage === 100 ? (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full">
                            Active
                        </span>
                    ) : (
                        <span className="bg-red-100 text-red-700 text-xs font-semibold px-4 py-1 rounded-full">
                            {100 - completionPercentage}% Incomplete
                        </span>
                    )}
                    {isExpiringSoon && (
                        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full">
                            Renew Now
                        </span>
                    )}
                    {isGroup && (
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full">
                            Group
                        </span>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 mt-4">
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
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-xs text-gray-400 mb-1">Renewal Date</div>
                        <div className="font-semibold text-gray-700">Jan 1, 2024</div>
                    </div>
                    <button
                        type="button"
                        className="p-2 px-6 rounded-3xl border-2 border-dotted border-[var(--color-custom-blue)] shadow-md flex items-center justify-center ml-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:border-blue-700 group"
                    >
                        download pdf
                        <img
                            onClick={() => {/* your download or navigation logic */ }}
                            className="w-[14px] h-[14px] ml-2 mx-auto transition-transform duration-200 group-hover:scale-125"
                            src="https://cdn-icons-png.flaticon.com/128/5585/5585018.png"
                            alt="logout"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopCard;