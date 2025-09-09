import React, { useState } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import PolicyBank from "./Policy Bank/policybank";
import PolicyDetails from "./Policy Bank/policy details/policyDetails";
import MainPageViewDetails from "./Claims/ViewDetails/mainPageViewDetails";
import Claims from "./Claims/mainPageClaim";
import Queries from "./Queries/mainPage";
import { savePolicyToStorage, createPolicyFromFile } from "../../utils/policyStorage";

const policyTypes = [
    "Health Insurance",
    "Life Insurance",
    "Motor Insurance",
    "Travel Insurance",
    "Home Insurance",
    "Other"
];

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
    { label: "Policy Genie", path: "/dashboard/policy-genie" },
    { label: "Renewal", path: "/dashboard/renewal" },
    { label: "Claims", path: "/dashboard/claims" },
    { label: "Query", path: "/dashboard/query" },
];

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Modal state
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [step, setStep] = useState<1 | 2>(1);

    const handleUploadClick = () => {
        setShowUploadModal(true);
        setStep(1);
        setSelectedType("");
        setPdfFile(null);
    };

    const handleModalClose = () => {
        setShowUploadModal(false);
        setStep(1);
        setSelectedType("");
        setPdfFile(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Limit: 50MB
        if (file.size > 50 * 1024 * 1024) {
            alert("File size exceeds 50MB limit.");
            return;
        }

        // Allow only PDFs
        if (file.type !== "application/pdf") {
            alert("Only PDF files are allowed.");
            return;
        }

        // Sanitize filename to prevent XSS
        const safeName = file.name.replace(/[^\w.\-() ]/g, "");

        // Create a new File with safe name (for display only)
        const safeFile = new File([file], safeName, { type: file.type });

        setPdfFile(safeFile);
    };

    const handleNext = () => {
        if (selectedType) setStep(2);
    };

    const handleUpload = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedType && pdfFile) {
            try {
                // Create policy data from uploaded file
                const policyData = createPolicyFromFile(pdfFile, selectedType);
                
                // Save to localStorage
                savePolicyToStorage(policyData);
                
                // Dispatch custom event to notify other components
                window.dispatchEvent(new CustomEvent('policyUploaded'));
                
                alert(`Policy of type "${selectedType}" uploaded successfully!`);
                handleModalClose();
            } catch (error) {
                console.error('Error uploading policy:', error);
                alert('Error uploading policy. Please try again.');
            }
        }
    };

    const handlenavigation = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#f6fafd] flex" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Aside Drawer */}
            <aside className="w-72 bg-white border-r border-white flex flex-col justify-between py-6 px-4 rounded-tl-2xl rounded-bl-2xl h-screen fixed left-0 top-0">
                {/* Top: Profile */}
                <div>
                    <div className="flex items-center px-4 pt-2 pb-6 gap-3 hover:cursor-pointer" onClick={() => navigate("/")}>
                        <div className="bg-[var(--color-custom-blue)] rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path d="M8 12h8M12 8v8" strokeWidth="2" />
                            </svg>
                        </div>
                        <button
                            className="flex flex-col items-start justify-start text-left hover:cursor-pointer"
                        >
                            <div className="font-bold text-lg text-gray-900">InsureVault</div>
                            <div className="text-xs text-gray-400">Hub</div>
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
                                        <span
                                            className={`${active === index ? "font-bold" : "font-medium"
                                                }`}
                                        >{item.label}</span>
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
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" className="w-10 h-10 rounded-full object-cover" />
                        </div>
                        <div className="bg-blue-50 rounded-xl pt-8 pb-4 px-4 flex flex-col items-start">
                            <span className="font-semibold text-[var(--color-custom-blue)] mb-4">Sophia Carter</span>
                            <button onClick={handlenavigation} className="flex flex-row gap-2 items-center justify-center w-full bg-[var(--color-custom-blue)] text-white rounded-lg px-4 py-3 font-semibold text-sm shadow hover:bg-blue-700 hover:cursor-pointer hover:shadow-[var(--color-custom-blue)] transition">
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-white"
                                >
                                    <g>
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6zm10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H10a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </g>
                                </svg>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72 overflow-y-auto min-h-screen">
                {/* Top Bar */}
                <div className="flex items-center justify-end bg-white px-16 pt-6 pb-4 mb-2" style={{ boxShadow: '0 4px 12px -4px rgba(0,0,0,0.10)' }}>
                    <button
                        className="flex items-center gap-2 bg-[var(--color-custom-blue)] text-white rounded-3xl px-4 py-2 font-normal text-sm shadow-md hover:shadow-lg hover:scale-[1.02] hover:cursor-pointer hover:bg-blue-700 transition-all duration-200"
                        onClick={handleUploadClick}
                    >
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
                    <Route path="*" element={<div className="w-full h-full flex items-center justify-center text-gray-400 text-xl">Select a menu item</div>} />
                </Routes>
            </main>

            {/* Upload Policy Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative flex flex-col items-center">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:cursor-pointer text-2xl font-bold transition"
                            onClick={handleModalClose}
                            aria-label="Close"
                            type="button"
                        >
                            &times;
                        </button>
                        <div className="w-full">
                            <div className="flex flex-col items-center mb-6">
                                <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
                                        <path d="M12 16V8M12 8L8 12M12 8L16 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <rect x="4" y="16" width="16" height="4" rx="2" strokeWidth="2" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">Upload New Policy</h2>
                                <p className="text-gray-500 text-sm">{step === 1 ? "Select your policy type" : "Upload your policy PDF"}</p>
                            </div>
                            <form onSubmit={handleUpload}>
                                {step === 1 && (
                                    <div>
                                        <label className="block text-base font-medium text-gray-700 mb-2">Policy Type</label>

                                        {/* Custom Dropdown */}
                                        <div className="relative w-full">
                                            <button
                                                type="button"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-lg px-4 py-3 text-base font-medium text-gray-700 shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                                            >
                                                {selectedType || "Choose type..."}
                                                <svg className="ml-2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {dropdownOpen && (
                                                <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                                                    <ul className="py-2">
                                                        {policyTypes.map((type) => (
                                                            <li key={type}>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedType(type);
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
                                        <button
                                            type="button"
                                            className="mt-6 w-full bg-blue-600 text-white rounded-lg py-3 font-semibold text-base hover:bg-blue-700 transition"
                                            onClick={handleNext}
                                            disabled={!selectedType}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className="flex flex-col items-center justify-center w-full">
                                        {!pdfFile ? (
                                            <label
                                                htmlFor="policy-pdf"
                                                className="flex flex-col items-center justify-center w-full border-2 border-dotted border-[var(--color-custom-blue)] rounded-2xl p-10 text-center hover:bg-blue-50 hover:cursor-pointer transition"
                                            >
                                                <span className="font-medium text-gray-700">
                                                    Click to upload or drag & drop
                                                </span>
                                                <span className="text-sm text-gray-500">PDF only (Max 50MB)</span>

                                                <input
                                                    id="policy-pdf"
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={handleFileChange}
                                                    className="hidden"
                                                    required
                                                />
                                            </label>
                                        ) : (
                                            <p className="w-full rounded-xl flex items-center justify-center border-[2px] border-dotted border-[var(--color-custom-blue)] p-6 mt-3 text-sm text-gray-600 truncate max-w-full font-medium">
                                                Uploaded file: {pdfFile.name}
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            className="mt-6 w-full bg-blue-600 text-white rounded-lg py-3 font-semibold text-base hover:bg-blue-700 transition"
                                            disabled={!pdfFile}
                                        >
                                            Upload
                                        </button>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;