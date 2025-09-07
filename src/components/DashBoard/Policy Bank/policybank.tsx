import React, { useState } from "react";
import PolicyCard from "./policyCard";
import PolicyCalendar from "./policyCalender";

const PolicyBank: React.FC = () => {
    const [filter, setFilter] = useState("All Types");
    const [activeTab, setActiveTab] = useState<'policies' | 'calendar'>('policies');

    // Sample policy data with all necessary information
    const policyData = [
        {
            id: 1,
            isExpiringSoon: true,
            daysUntilExpiry: 15,
            isGroup: false,
            completionPercentage: 85,
            policyType: "Health Insurance",
            insurer: "Tata AIG Insurance",
            policyId: "2394577640"
        },
        {
            id: 2,
            isExpiringSoon: false,
            daysUntilExpiry: 45,
            isGroup: true,
            completionPercentage: 60,
            policyType: "Health Insurance",
            insurer: "HDFC Life",
            policyId: "2394577641",
            memberCount: 5
        },
        {
            id: 3,
            isExpiringSoon: true,
            daysUntilExpiry: 7,
            isGroup: false,
            completionPercentage: 45,
            policyType: "Term Life Insurance",
            insurer: "LIC India",
            policyId: "2394577642"
        },
        {
            id: 4,
            isExpiringSoon: false,
            daysUntilExpiry: 120,
            isGroup: true,
            completionPercentage: 100,
            policyType: "Health Insurance",
            insurer: "Star Health",
            policyId: "2394577643",
            memberCount: 8
        },
        {
            id: 5,
            isExpiringSoon: true,
            daysUntilExpiry: 25,
            isGroup: false,
            completionPercentage: 70,
            policyType: "Motor Insurance",
            insurer: "Bajaj Allianz",
            policyId: "2394577644"
        },
    ];

    // Filter logic
    const filteredPolicies = filter === "All Types"
        ? policyData
        : policyData.filter(p => p.policyType === filter);

    const handleRenewPolicy = (policyId: number) => {
        console.log(`Renewing policy with ID: ${policyId}`);
        // Add your renewal logic here
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="w-full max-w-[68rem] mx-auto py-8 mb-5" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Policy Bank</h1>
            {/* Subheading Tabs Row */}
            <div className="flex items-center justify-between mb-6">
                <div className="inline-flex gap-8 border-b border-gray-200">
                    <button
                        className={`pb-2 px-2 font-semibold transition-colors duration-200 ${activeTab === 'policies' ? 'text-[var(--color-custom-blue)] border-b-2 border-[var(--color-custom-blue)]' : 'text-gray-500'}`}
                        style={{ background: 'transparent' }}
                        onClick={() => setActiveTab('policies')}
                    >
                        My Policies
                    </button>
                    <button
                        className={`pb-2 px-2 font-semibold transition-colors duration-200 ${activeTab === 'calendar' ? 'text-[var(--color-custom-blue)] border-b-2 border-[var(--color-custom-blue)]' : 'text-gray-500'}`}
                        style={{ background: 'transparent' }}
                        onClick={() => setActiveTab('calendar')}
                    >
                        View Calendar
                    </button>
                </div>
                {/* Right side options */}
                <div className="flex gap-2 py-6">
                    {activeTab === 'policies' && (
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-2 relative">
                                <label className="text-sm font-medium text-gray-700">Filter by:</label>
                                <div className="relative w-44">
                                    <button
                                        type="button"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                                    >
                                        {filter || "All Types"}
                                        <svg className="ml-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                                            <ul className="py-2 max-h-60 overflow-auto">
                                                {["All Types", "Home", "Auto", "Health", "Life", "Travel", "Pet", "Business", "Rental", "Motorcycle", "Boat"].map((type) => (
                                                    <li key={type}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setFilter(type);
                                                                setDropdownOpen(false);
                                                            }}
                                                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                                        >
                                                            {type}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === 'calendar' && (
                        <div className="flex items-center space-x-3">
                            <button
                                type="button"
                                className="border bg-white border-gray-200 p-4 text-sm shadow flex flex-row gap-2 rounded-lg hover:bg-gray-100 items-center justify-center hover:cursor-pointer h-8"
                            >
                                Export list
                                <img
                                    className="w-[18px] h-[18px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                    src="https://cdn-icons-png.flaticon.com/128/5585/5585018.png"
                                    alt="download"
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {/* Tab Content */}
            {activeTab === 'policies' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-2 mb-2">
                    {filteredPolicies.map((policy) => (
                        <PolicyCard
                            key={policy.id}
                            isExpiringSoon={policy.isExpiringSoon}
                            daysUntilExpiry={policy.daysUntilExpiry}
                            isGroup={policy.isGroup}
                            completionPercentage={policy.completionPercentage}
                            policyType={policy.policyType}
                            insurer={policy.insurer}
                            policyId={policy.policyId}
                            memberCount={policy.memberCount}
                            onRenew={() => handleRenewPolicy(policy.id)}
                        />
                    ))}
                </div>
            ) : (
                <PolicyCalendar />
            )}
        </div>
    );
};

export default PolicyBank;