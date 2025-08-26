import React, { useState } from "react";
import { useNavigate } from "react-router";
import PolicyBank from "./Policy Bank/policybank";
import logout from '../../assets/logout-svgrepo-com.png';

// Example inline SVGs for nav buttons (replace with your own or import SVGs)
const navIcons = [
    // Policy Bank
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="2" /><path d="M4 10h16" strokeWidth="2" /></svg>,
    // Group Management
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="8" cy="8" r="3" strokeWidth="2" /><circle cx="16" cy="8" r="3" strokeWidth="2" /><path d="M2 20c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeWidth="2" /><path d="M14 20c0-3.314 2.686-6 6-6" strokeWidth="2" /></svg>,
    // Policy Genie
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path d="M8 12h8M12 8v8" strokeWidth="2" /></svg>,
    // Renewal
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeWidth="2" /><circle cx="12" cy="12" r="5" strokeWidth="2" /></svg>,
    // Requests
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" /><path d="M8 10h8M8 14h6" strokeWidth="2" /></svg>
];

const menuItems = [
    { label: "Policy Bank" },
    { label: "Group Management" },
    { label: "Policy Genie" },
    { label: "Renewal" },
    { label: "Requests" },
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
                    <nav className="flex flex-col gap-2">
                        {menuItems.map((item, idx) => (
                            <button
                                key={item.label}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-normal transition ${active === idx
                                    ? 'bg-[var(--color-custom-blue)] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-blue-50'
                                    }`}
                                onClick={() => setActive(idx)}
                                style={active === idx ? { background: 'var(--color-custom-blue)', color: '#fff' } : {}}
                            >
                                <span className="w-6 h-6 flex items-center justify-center">{navIcons[idx]}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
                {/* Bottom: Genie Card */}
                <div className="mt-8">
                    <div className="relative mb-3">
                        <div className="absolute -top-6 left-4 bg-[var(--color-custom-blue)] rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                            {/* Genie Icon */}
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
                {/* Top Bar for Policy Genie */}
                <div className="flex items-center justify-between bg-white px-24 pt-6 pb-4 mb-2" style={{ boxShadow: '0 4px 12px -4px rgba(0,0,0,0.10)' }}>
                    <div className="flex items-center gap-3">
                        {/* Icon */}
                        <div className="bg-[var(--color-custom-blue)] rounded-full w-8 h-8 flex items-center justify-center">
                            {/* Genie SVG */}
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path d="M8 12h8M12 8v8" strokeWidth="2" />
                            </svg>
                        </div>
                        <div>
                            <div className="font-bold text-lg text-gray-900">Policy Genie</div>
                            <div className="text-xs text-gray-400">Hub</div>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 bg-[var(--color-custom-blue)] text-white rounded-3xl px-4 py-2 font-normal text-sm shadow-none hover:bg-blue-700 transition">
                        {/* Upload SVG */}
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white">
                            <path d="M12 16V8M12 8L8 12M12 8L16 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="4" y="16" width="16" height="4" rx="2" strokeWidth="2" />
                        </svg>
                        Upload Policy
                    </button>
                </div>
                {/* Page Content */}
                {active === 0 ? <PolicyBank /> : <div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">Select a menu item</div>}
            </main>
        </div>
    );
};

export default Dashboard;
