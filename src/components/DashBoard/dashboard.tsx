import React, { useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import PolicyBank from "./Policy Bank/policybank";
import PolicyDetails from "./Policy Bank/policy details/policyDetails";
import logout from '../../assets/logout-svgrepo-com.png';
import MainPageGroupManagement from "./Group Management/mainCard";
import MainPageViewDetails from "./Claims/ViewDetails/mainPageViewDetails";
import Claims from "./Claims/mainPageClaim";
import Queries from "./Queries/mainPage";

// Example inline SVGs for nav buttons
const navIcons = [
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="2" /><path d="M4 10h16" strokeWidth="2" /></svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="8" cy="8" r="3" strokeWidth="2" /><circle cx="16" cy="8" r="3" strokeWidth="2" /><path d="M2 20c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeWidth="2" /><path d="M14 20c0-3.314 2.686-6 6-6" strokeWidth="2" /></svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12h8M12 8v8" strokeWidth="2" /></svg>,
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeWidth="2" /><circle cx="12" cy="12" r="5" strokeWidth="2" /></svg>,
    // Claim icon - Document with checkmark
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12c.552 0 1-.448 1-1V8a2 2 0 00-2-2h-5L9 4H4a2 2 0 00-2 2v13c0 1.104.896 2 2 2h16a2 2 0 002-2v-1c0-.552-.448-1-1-1z" strokeWidth="2" /></svg>,
    // Query icon - Question mark in circle
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 17h.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
];

const menuItems = [
    { label: "Policy Bank", path: "/dashboard/policy-bank" },
    { label: "Group Management", path: "/dashboard/group-management" },
    { label: "Policy Genie", path: "/dashboard/policy-genie" },
    { label: "Renewal", path: "/dashboard/renewal" },
    { label: "Claims", path: "/dashboard/claims" }, // Changed from "claim" to "claims"
    { label: "Query", path: "/dashboard/query" },
];

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);

    const handlenavigation = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#f6fafd] flex" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Aside Drawer */}
            <aside className="w-72 bg-white border-r border-white flex flex-col justify-between py-6 px-4 rounded-tl-2xl rounded-bl-2xl h-screen fixed left-0 top-0">
                {/* Top: Profile */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-semibold text-gray-800">Sophia Carter</span>
                        </div>
                        <button type="button" className="p-2 rounded-lg hover:bg-gray-100 transition group flex items-center justify-center">
                            <img onClick={handlenavigation} className="w-[24px] h-[24px] mx-auto transition-transform duration-200 group-hover:scale-125" src={logout} alt="logout" />
                        </button>
                    </div>
                    {/* Menu */}
                    <nav>
                        <ul className="space-y-1">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setActive(index)}
                                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-200 ${active === index
                                            ? "bg-[var(--color-custom-blue)] text-white font-bold"
                                            : "text-gray-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <div className="w-6 h-6 flex items-center justify-center">
                                            {navIcons[index]}
                                        </div>
                                        <span className="font-medium">{item.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {/* Bottom: Genie Card */}
                <div className="mt-8">
                    <div className="relative mb-3">
                        <div className="absolute -top-6 left-4 bg-[var(--color-custom-blue)] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12h8M12 8v8" strokeWidth="2" /></svg>
                        </div>
                        <div className="bg-blue-50 rounded-xl pt-8 pb-4 px-4 flex flex-col items-start">
                            <span className="font-semibold text-[var(--color-custom-blue)] mb-1">Policy Genie</span>
                            <span className="text-xs text-gray-500 mb-3">Get detailed analysis across all your policies.</span>
                            <button className="bg-[var(--color-custom-blue)] text-white rounded-lg px-4 py-2 font-semibold text-sm shadow hover:bg-blue-700 transition">Ask Genie</button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72 overflow-y-auto min-h-screen">
                {/* Top Bar */}
                <div className="flex items-center justify-between bg-white px-24 pt-6 pb-4 mb-2" style={{ boxShadow: '0 4px 12px -4px rgba(0,0,0,0.10)' }}>
                    <div className="flex items-center gap-3">
                        <div className="bg-[var(--color-custom-blue)] rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path d="M8 12h8M12 8v8" strokeWidth="2" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-bold text-lg text-gray-900">InsureVault</div>
                            <div className="text-xs text-gray-400">Hub</div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 bg-[var(--color-custom-blue)] text-white rounded-3xl px-4 py-2 font-normal text-sm shadow-none hover:bg-blue-700 transition">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path d="M12 16V8M12 8L8 12M12 8L16 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="4" y="16" width="16" height="4" rx="2" strokeWidth="2" />
                        </svg>
                        Upload Policy
                    </button>
                </div>

                {/* Page Content */}
                <Routes>
                    <Route path="/" element={<PolicyBank />} />
                    <Route path="policy-bank" element={<PolicyBank />} />
                    <Route path="policy-details" element={<PolicyDetails />} />
                    <Route path="claims" element={<Claims />} />
                    <Route path="claims/view-details/:requestId" element={<MainPageViewDetails />} />
                    <Route path="query" element={<Queries />} />
                    <Route path="group-management" element={<MainPageGroupManagement />} />
                    <Route path="*" element={<div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">Select a menu item</div>} />
                </Routes>
            </main>
        </div>
    );
};

export default Dashboard;