import React from "react";
import Button from "../../../commonComp/Button";

const LeftSideCard: React.FC = () => {
    return (
        <div
            className="bg-white rounded-xl shadow-sm px-6 py-6 w-full max-w-lg flex flex-col justify-between md:max-w-[550px] sm:max-w-full sm:px-8 sm:py-8"
            style={{
                fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif',
                minHeight: '420px', // Desktop min height
            }}
        >
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Policy Features</h2>
                <div className="mb-6">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Core Coverage</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">In-patient Hospitalization</span>
                                <p className="text-sm text-gray-500">Covers room rent, ICU charges, doctor's fees, and other related expenses.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">Pre & Post-Hospitalization</span>
                                <p className="text-sm text-gray-500">Covers medical expenses for 60 days before and 90 days after hospitalization.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">Day Care Procedures</span>
                                <p className="text-sm text-gray-500">Covers medical treatments that do not require 24-hour hospitalization.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-2">Additional Benefits</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">Maternity and Newborn Care</span>
                                <p className="text-sm text-gray-500">Coverage for childbirth and newborn baby expenses up to $5,000.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">Annual Health Check-ups</span>
                                <p className="text-sm text-gray-500">One complimentary health check-up per year for each insured member.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22C55E" /><path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-900">Emergency Ambulance Services</span>
                                <p className="text-sm text-gray-500">Up to $1,000 per hospitalization.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="w-full" text="File a Claim" />
                <Button className="w-full" text="View PDF" />
            </div>
        </div>
    );
};

export default LeftSideCard;