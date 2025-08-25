import React, { useState } from "react";
import PolicyCardInd from "./policyCardInd";
import PolicyCardGrp from "./policyCardGrp";
import Button from "../../commonComp/Button";

const PolicyBank: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'policies' | 'calendar'>('policies');

	return (
		<div className="w-full max-w-5xl mx-auto py-8" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
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
												<Button type="button" className="bg-white px-2 py-2 rounded-lg font-semibold flex items-center justify-center group">
													<svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:scale-125">
														<circle cx="12" cy="12" r="12" fill="#0A2A5B" />
														<path d="M8 8h8l-3.5 5v3l-1 1v-4l-3.5-5z" fill="white" />
													</svg>
												</Button>
								)}
								{activeTab === 'calendar' && (
									<>
										<Button type="button" className="bg-[var(--color-custom-blue)] text-white px-4 py-2 rounded-lg font-normal flex items-center justify-center group">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:scale-125">
												<path d="M12 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												<path d="M8 12l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
												<rect x="6" y="16" width="12" height="4" rx="2" fill="currentColor" />
											</svg>
										</Button>
														<Button type="button" className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold flex items-center justify-center group">
															<svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200 group-hover:scale-125">
																<circle cx="12" cy="12" r="12" fill="#0A2A5B" />
																<path d="M8 8h8l-3.5 5v3l-1 1v-4l-3.5-5z" fill="white" />
															</svg>
														</Button>
									</>
								)}
				</div>
			</div>
			{/* Tab Content */}
			{activeTab === 'policies' ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] pr-2">
					<PolicyCardInd />
					<PolicyCardGrp />
					<PolicyCardInd />
					<PolicyCardGrp />
					<PolicyCardInd />
					<PolicyCardGrp />
					<PolicyCardInd />
				</div>
			) : (
				<div className="min-h-[300px] flex items-center justify-center text-gray-400">View Calendar (empty)</div>
			)}
		</div>
	);
};

export default PolicyBank;
