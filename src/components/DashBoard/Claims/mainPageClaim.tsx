import React from "react";
import SubmittedQueries from "./submittedQuery";
import { RaiseClaim } from "./raiseClaim";

const Claims: React.FC = () => {

    return (
        <div className="w-full max-w-5xl mx-auto py-8 mb-5" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Heading */}
            <div className="flex flex-col gap-0 items-centre justify-centre">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Claims</h1>
                <p className="text-md text-gray-400 mb-10">Track, manage, and resolve your claims seamlessly.</p>
            </div>
            {/* Subheading Tabs Row */}
            <div className="flex flex-row gap-6 max-h-[600px] pr-2">
                <div className="basis-1/3">
                    <RaiseClaim />
                </div>
                <div className="basis-2/3">
                    <SubmittedQueries />
                </div>
            </div>
        </div>
    );
};

export default Claims;