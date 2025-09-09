import React, { useState, useEffect } from "react";
import PolicyCard from "./policyCard";
import PolicyCalendar from "./policyCalender";
import { getPoliciesFromStorage, type PolicyData } from "../../../utils/policyStorage";

const PolicyBank: React.FC = () => {
    const [filter, setFilter] = useState("All Types");
    const [activeTab, setActiveTab] = useState<'policies' | 'calendar'>('policies');
    const [policyData, setPolicyData] = useState<PolicyData[]>([]);

    // Load policies from localStorage on component mount and when storage changes
    useEffect(() => {
        const storedPolicies = getPoliciesFromStorage();
        setPolicyData(storedPolicies);
    }, []);

    // Listen for storage changes and custom events to update when new policies are uploaded
    useEffect(() => {
        const handleStorageChange = () => {
            const storedPolicies = getPoliciesFromStorage();
            setPolicyData(storedPolicies);
        };

        const handlePolicyUploaded = () => {
            const storedPolicies = getPoliciesFromStorage();
            setPolicyData(storedPolicies);
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('policyUploaded', handlePolicyUploaded);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('policyUploaded', handlePolicyUploaded);
        };
    }, []);

    // Sample policy data for demonstration (will be merged with uploaded policies)
    const samplePolicyData = [
        {
            id: "sample-1",
            policyType: "Health Insurance",
            insurer: "Tata AIG Insurance",
            policyId: "2394577640",
            fileName: "sample-health.pdf",
            fileSize: 1024000,
            uploadDate: new Date().toISOString(),
            status: "Active" as const,
            premium: "$450/month",
            expiresOn: "Dec 31, 2024",
            documentsCount: 3,
            isGroup: false,
            memberCount: 1,
            completionPercentage: 85,
            isExpiringSoon: true,
            daysUntilExpiry: 15
        },
        {
            id: "sample-2",
            policyType: "Travel Insurance",
            insurer: "Bajaj Allianz",
            policyId: "2394577644",
            fileName: "sample-motor.pdf",
            fileSize: 2048000,
            uploadDate: new Date().toISOString(),
            status: "Active" as const,
            premium: "$320/month",
            expiresOn: "Mar 15, 2025",
            documentsCount: 2,
            isGroup: false,
            memberCount: 1,
            completionPercentage: 70,
            isExpiringSoon: true,
            daysUntilExpiry: 25
        },
        {
            id: "sample-2",
            policyType: "Group Insurance",
            insurer: "Bajaj Allianz",
            policyId: "2394577644",
            fileName: "sample-motor.pdf",
            fileSize: 2048000,
            uploadDate: new Date().toISOString(),
            status: "Active" as const,
            premium: "$320/month",
            expiresOn: "Mar 15, 2025",
            documentsCount: 2,
            isGroup: true,
            memberCount: 1,
            completionPercentage: 100,
            isExpiringSoon: true,
            daysUntilExpiry: 25
        },
    ];

    // Combine sample data with uploaded policies
    const allPolicies = [...samplePolicyData, ...policyData];

    // Filter logic
    const filteredPolicies = filter === "All Types"
        ? allPolicies
        : allPolicies.filter(p => p.policyType === filter);

    const handleRenewPolicy = (policyId: string) => {
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