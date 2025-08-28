import React from 'react';

interface LeftCardProps {
  planName?: string;
  policyNumber?: string;
  members?: number;
  policyStart?: string;
  policyEnd?: string;
  status?: 'Active' | 'Inactive' | 'Expired';
  onViewDocuments?: () => void;
}

const LeftCard: React.FC<LeftCardProps> = ({
  planName = "Family Health Plan",
  policyNumber = "GRP-12345678",
  members = 215,
  policyStart = "Jan 1, 2024",
  policyEnd = "Dec 31, 2024",
  status = "Active",
  onViewDocuments
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700';
      case 'Expired':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 w-full max-w-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          {planName}
        </h2>
        <p className="text-sm text-gray-500">
          Policy No. {policyNumber}
        </p>
      </div>

      {/* Details */}
      <div className="space-y-4 mb-6">
        {/* Members */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Members</span>
          <span className="text-sm font-semibold text-gray-900">{members}</span>
        </div>

        {/* Policy Start */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Policy Start</span>
          <span className="text-sm font-semibold text-gray-900">{policyStart}</span>
        </div>

        {/* Policy End */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Policy End</span>
          <span className="text-sm font-semibold text-gray-900">{policyEnd}</span>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Status</span>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </div>

      {/* View Policy Documents Button */}
      <button
        onClick={onViewDocuments}
        className="w-full bg-white border border-blue-500 text-blue-500 rounded-full py-2.5 px-4 font-medium text-sm hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View Policy Documents
      </button>
    </div>
  );
};

export default LeftCard;