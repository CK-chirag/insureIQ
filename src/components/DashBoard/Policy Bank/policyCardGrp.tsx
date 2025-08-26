import React from "react";
import { useNavigate } from "react-router-dom";

const PolicyCardGrp: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div
            className="relative z-0 h-fit bg-white rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:border-2 hover:border-[var(--color-custom-blue)] flex flex-col"
            style={{
                minWidth: 320,
                maxWidth: 400,
                fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onClick={() => navigate("/dashboard/policy-details", { state: { isGroup: true } })}
        >
            {/* Image */}
            <div className="w-full h-40 rounded-t-xl overflow-hidden">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOPb1pDl9t7aDugXWoRw843NC1CbLHrf3Q&s"
                    alt="Policy Group"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Badges */}
                <div className="flex gap-2 mb-3">
                    <span className="bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full">Renew</span>
                    <span className="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full">Group</span>
                </div>
                {/* Title & Details */}
                <div className="mb-2">
                    <div className="font-bold text-mb text-gray-900 mb-1">Health Insurance</div>
                    <div className="text-sm text-gray-600">Tata AIG Insurance</div>
                    <div className="text-sm text-gray-600">Policy ID: 2394577640</div>
                </div>
                {/* View Details */}
                <div className="mt-4">
                    <p
                        typeof="button"
                        className="text-sm underline hover:text-[#0055DE]"
                    >
                        View Details
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PolicyCardGrp;