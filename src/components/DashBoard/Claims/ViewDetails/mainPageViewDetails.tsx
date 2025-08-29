import React from 'react';
import LeftSideCard from './LeftSideCard';
import ActionCard from './ActionCard';
import { useNavigate } from 'react-router';

interface MainPageViewDetailsProps {
    requestData?: {
        requestId: string;
        assignedAgent: {
            name: string;
            phone: string;
            avatar: string;
        };
        lastUpdate: {
            message: string;
            from: string;
        };
        requestHistory: Array<{
            id: string;
            status: string;
            timestamp: string;
            type: 'submitted' | 'assigned' | 'processing' | 'completed' | 'cancelled';
        }>;
    };
    onStatusUpdate?: (status: string, message: string) => void;
}

const MainPageViewDetails: React.FC<MainPageViewDetailsProps> = ({
    requestData,
    onStatusUpdate
}) => {
    const handleStatusUpdate = (status: string, message: string) => {
        console.log('Status updated:', status, 'Message:', message);
        onStatusUpdate?.(status, message);
        // Add your update logic here
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:px-30 lg:pt-10">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="mb-8">
                    <div className='flex flex-row gap-4 items-start justify-start'>
                        <button
                            type="button"
                            className="p-2 rounded-lg hover:bg-gray-100 transition group flex items-center justify-center"
                        >
                            <img
                                onClick={() => navigate("/dashboard/claims")}
                                className="w-[24px] h-[24px] mx-auto transition-transform duration-200 group-hover:scale-125"
                                src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                                alt="back arrow"
                            />
                        </button>
                        <div className='flex flex-col '>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                Claim Details
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                View and manage claim information
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Side - Claim Details & History */}
                    <div className="space-y-6">
                        <LeftSideCard
                            requestId={requestData?.requestId}
                            assignedAgent={requestData?.assignedAgent}
                            lastUpdate={requestData?.lastUpdate}
                            requestHistory={requestData?.requestHistory}
                        />
                    </div>

                    {/* Right Side - Agent Actions */}
                    <div className="space-y-6">
                        <ActionCard
                            onStatusUpdate={handleStatusUpdate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageViewDetails;