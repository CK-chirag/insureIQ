import React, { useState } from "react";
import { RaiseClaim } from "./Claims/raiseClaim";
import SubmittedQueries from "./Claims/submittedQuery";

const Requests: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'claims' | 'queries'>('claims');

    return (
        <div className="w-full max-w-5xl mx-auto py-8 mb-5" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Requests</h1>
            {/* Subheading Tabs Row */}
            <div className="flex items-center justify-between mb-6">
                <div className="inline-flex gap-8 border-b border-gray-200">
                    <button
                        className={`pb-2 px-2 font-semibold transition-colors duration-200 ${activeTab === 'claims' ? 'text-[var(--color-custom-blue)] border-b-2 border-[var(--color-custom-blue)]' : 'text-gray-500'}`}
                        style={{ background: 'transparent' }}
                        onClick={() => setActiveTab('claims')}
                    >
                        Claims
                    </button>
                    <button
                        className={`pb-2 px-2 font-semibold transition-colors duration-200 ${activeTab === 'queries' ? 'text-[var(--color-custom-blue)] border-b-2 border-[var(--color-custom-blue)]' : 'text-gray-500'}`}
                        style={{ background: 'transparent' }}
                        onClick={() => setActiveTab('queries')}
                    >
                        Queries
                    </button>
                </div>
            </div>
            {/* Tab Content */}
            {activeTab === 'claims' ? (
                <div className="flex flex-row gap-6 max-h-[600px] pr-2">
                    <div className="basis-1/3">
                        <RaiseClaim />
                    </div>
                    <div className="basis-2/3">
                        <SubmittedQueries />
                    </div>
                </div>

            ) : (
                <div className="min-h-[300px] flex items-center justify-center text-gray-400">View Calendar (empty)</div>
            )}
        </div>
    );
};

export default Requests;
