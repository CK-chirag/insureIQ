import React, { useState } from "react";
import PolicyCard from "./policyCard"; // Updated import

const PolicyBank: React.FC = () => {
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
            completionPercentage: 90,
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

    const handleRenewPolicy = (policyId: number) => {
        console.log(`Renewing policy with ID: ${policyId}`);
        // Add your renewal logic here
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-8 mb-5" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
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
                <div className="flex gap-2 pb-10">
                    {activeTab === 'policies' && (
                        <button
                            type="button"
                            className="p-3 rounded-md shadow hover:bg-gray-100 transition group flex items-center justify-center"
                        >
                            <img
                                className="w-[20px] h-[20px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                src="https://cdn-icons-png.flaticon.com/512/107/107799.png"
                                alt="filter"
                            />
                        </button>
                    )}
                    {activeTab === 'calendar' && (
                        <>
                            <button
                                type="button"
                                className="p-3 rounded-md shadow hover:bg-gray-100 transition group flex items-center justify-center"
                            >
                                <img
                                    className="w-[20px] h-[20px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQllvPxnn1j5oJACPEsZH_50lKgdTc9ZtBkEcRLSbXseSQN1NRH3qQp3fOjpEmL69a4AA&usqp=CAU"
                                    alt="filter"
                                />
                            </button>
                            <button
                                type="button"
                                className="p-3 rounded-md shadow hover:bg-gray-100 transition group flex items-center justify-center"
                            >
                                <img
                                    className="w-[20px] h-[20px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                    src="https://cdn-icons-png.flaticon.com/512/107/107799.png"
                                    alt="filter"
                                />
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/* Tab Content */}
            {activeTab === 'policies' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-2 mb-2">
                    {policyData.map((policy) => (
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
                <div className="min-h-[300px] flex items-center justify-center text-gray-400">View Calendar (empty)</div>
            )}
        </div>
    );
};

export default PolicyBank;