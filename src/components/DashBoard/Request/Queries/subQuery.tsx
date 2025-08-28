import React from "react";

const SubQueries: React.FC = () => {
    const requests = [
        {
            id: "#12345",
            agent: {
                name: "Agent Smith",
                phone: "555-123-4567",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
            },
            status: "In Progress",
            statusColor: "bg-yellow-100 text-yellow-700"
        },
        {
            id: "#67890",
            agent: {
                name: "Agent Johnson",
                phone: "555-987-6543",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
            },
            status: "Resolved",
            statusColor: "bg-green-100 text-green-700"
        },
        {
            id: "#11223",
            agent: {
                name: "Agent Williams",
                phone: "555-111-2222",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
            },
            status: "Pending",
            statusColor: "bg-red-100 text-red-700"
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full" style={{ fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif' }}>
            {/* Header */}
            <h1 className="mb-8 font-bold text-xl">
                Submitted Queries
            </h1>
            <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-100 mb-4">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">REQUEST ID</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">ASSIGNED AGENT</div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">PHONE NUMBER</div>
                <div></div>
            </div>

            {/* Requests */}
            <div className="space-y-0">
                {requests.map((request, index) => (
                    <div key={index} className={`grid grid-cols-4 gap-4 items-center py-4 ${index < requests.length - 1 ? 'border-b border-gray-200' : ''}`}>
                        {/* Request ID */}
                        <div className="text-mb font-bold text-gray-700">
                            {request.id}
                        </div>

                        {/* Agent Info */}
                        <div className="flex items-center gap-3">
                            <img
                                src={request.agent.avatar}
                                alt={request.agent.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <div className="font-semibold text-gray-700 text-sm">{request.agent.name}</div>
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <span className='inline-flex items-center px-3 py-1 text-sm text-gray-700 font-semibold'>
                                {request.agent.phone}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubQueries;