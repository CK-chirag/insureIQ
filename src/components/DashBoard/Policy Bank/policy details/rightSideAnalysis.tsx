import React from "react";
import Button from "../../../commonComp/Button";

const RightSideAnalysis: React.FC = () => {
    return (
        <div className="w-full rounded-2xl shadow-lg p-6 space-y-6" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Header */}
            <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="text-blue-500">
                    <img className="w-8 h-7" src="https://images.samsung.com/in/galaxy-watch-ultra/2507_feature/galaxy-watch-ultra-2025-icon-ai.png?imbypass=true" alt="AI" />
                </span> Genie&apos;s Analysis
            </h2>

            {/* Coverage Score */}
            <div>
                <h3 className="text-base font-semibold mb-1">Coverage Score</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Your policy&apos;s overall coverage score is 78 out of 100 based on market standards.
                </p>
                <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-500">Needs Improvement</span>
                    <span className="text-gray-800 font-medium">78/100</span>
                    <span className="text-gray-500">Excellent</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 to-blue-600" style={{ width: '78%' }}></div>
                </div>
            </div>

            {/* Market Comparison */}
            <div>
                <h3 className="text-base font-semibold mb-2">Market Comparison</h3>
                <p className="text-sm text-gray-600 mb-8">
                    Here&apos;s how your policy&apos;s sum insured compares to the market average and our recommendation for your profile in San Francisco.
                </p>
                <div className="flex items-end justify-around h-32">
                    <div className="flex flex-col items-center">
                        <div className="w-10 bg-blue-500 rounded-t-md" style={{ height: '80px' }}></div>
                        <span className="text-xs text-gray-700 mt-1">$500k</span>
                        <span className="text-xs text-blue-500 font-medium">Your Policy</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-10 bg-gray-300 rounded-t-md" style={{ height: '96px' }}></div>
                        <span className="text-xs text-gray-700 mt-1">$600k</span>
                        <span className="text-xs text-gray-500">Market Avg.</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-10 bg-green-500 rounded-t-md" style={{ height: '120px' }}></div>
                        <span className="text-xs text-gray-700 mt-1">$750k</span>
                        <span className="text-xs text-green-500 font-medium">Recommended</span>
                    </div>
                </div>
            </div>

            {/* Coverage Gaps */}
            <div>
                <h3 className="text-base font-semibold mb-3">Coverage Gaps</h3>
                <p className="text-sm text-gray-600 mb-3">
                    Your policy has some gaps. Here&apos;s a breakdown:
                </p>
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Critical Illness</span>
                            <span>50%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute left-0 top-0 h-full bg-yellow-400" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Dental & Vision</span>
                            <span>0%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute left-0 top-0 h-full bg-red-400" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span>Maternity Care</span>
                            <span>100%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute left-0 top-0 h-full bg-green-500" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Suggested Add-ons */}
            <div>
                <h3 className="text-base font-semibold mb-3">Suggested Add-ons</h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-white shadow">
                        <div>
                            <p className="text-sm font-medium">Critical Illness Rider</p>
                            <p className="text-xs text-gray-500">Starting from $25/month</p>
                        </div>
                        <button className="bg-blue-400 h-8 w-6 text-white rounded-2xl">
                            +
                        </button>
                    </div>
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-white shadow">
                        <div>
                            <p className="text-sm font-medium">Dental & Vision Care</p>
                            <p className="text-xs text-gray-500">Starting from $40/month</p>
                        </div>
                        <button className="bg-blue-400 h-8 w-6 text-white rounded-2xl">
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Upgrade Button */}
            <Button className="w-full" text="Upgrade My Policy"/>
        </div>
    );
};

export default RightSideAnalysis;