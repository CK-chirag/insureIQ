import React from 'react';

interface HistoryItem {
  id: string;
  status: string;
  timestamp: string;
  type: 'submitted' | 'assigned' | 'processing' | 'completed' | 'cancelled';
}

interface LeftSideCardProps {
  requestId?: string;
  assignedAgent?: {
    name: string;
    phone: string;
    avatar: string;
  };
  lastUpdate?: {
    message: string;
    from: string;
  };
  requestHistory?: HistoryItem[];
}

const LeftSideCard: React.FC<LeftSideCardProps> = ({
  requestId = "#1234567890",
  assignedAgent = {
    name: "Sarah Johnson",
    phone: "+1-555-123-4567",
    avatar: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBwaG90b3N8ZW58MHx8MHx8fDA%3D"
  },
  lastUpdate = {
    message: "Your request is currently being processed. We'll update you within 24 hours.",
    from: "Sarah Johnson"
  },
  requestHistory = [
    {
      id: "1",
      status: "Request Submitted",
      timestamp: "2024-01-15 10:00 AM",
      type: "submitted"
    },
    {
      id: "2",
      status: "Agent Assigned",
      timestamp: "2024-01-15 11:00 AM",
      type: "assigned"
    },
    {
      id: "3",
      status: "Processing",
      timestamp: "2024-01-16 12:00 PM",
      type: "processing"
    }
  ]
}) => {
  const getStatusIcon = (type: HistoryItem['type']) => {
    switch (type) {
      case 'submitted':
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'assigned':
        return (
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'processing':
        return (
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'completed':
        return (
          <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Request Details Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 w-full">
        {/* Request Details Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
            Request Details
          </h2>
          <p className="text-sm text-gray-500">
            Request ID: <span className="font-medium">{requestId}</span>
          </p>
        </div>

        {/* Assigned Agent Section */}
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Assigned Agent
          </h3>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                src={assignedAgent.avatar}
                alt={assignedAgent.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {assignedAgent.name}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {assignedAgent.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Last Update Section */}
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Last Update
          </h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-md">
            <p className="text-sm text-gray-700 mb-2">
              {lastUpdate.message}
            </p>
            <p className="text-xs text-gray-500">
              from {lastUpdate.from}
            </p>
          </div>
        </div>
      </div>

      {/* Request History Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 w-full">
        <h3 className="text-base font-medium text-gray-900 mb-4">
          Request History
        </h3>
        <div className="space-y-4">
          {requestHistory.map((item) => (
            <div key={item.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getStatusIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {item.status}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideCard;