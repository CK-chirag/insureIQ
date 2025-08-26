import React, { useState } from "react";
import PolicyCardInd from "./policyCardInd";
import PolicyCardGrp from "./policyCardGrp";
import Button from "../../commonComp/Button";

const PolicyBank: React.FC = () => {
	const [activeTab, setActiveTab] = useState<'policies' | 'calendar'>('policies');

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
