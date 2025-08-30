import React, { useState } from 'react';
import Button from '../../../commonComp/Button';

interface ActionCardProps {
  currentStatus?: string;
  onStatusUpdate?: (status: string, message: string) => void;
  statusOptions?: string[];
}

const ActionCard: React.FC<ActionCardProps> = ({
  currentStatus = "Processing",
  onStatusUpdate,
  statusOptions = [
    "Processing",
    "Under Review", 
    "Approved",
    "Rejected",
    "Completed",
    "On Hold"
  ]
}) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [updateMessage, setUpdateMessage] = useState('');

  const handleSendUpdate = () => {
    if (updateMessage.trim()) {
      onStatusUpdate?.(selectedStatus, updateMessage);
      setUpdateMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Agent Actions
        </h2>
      </div>

      {/* Status Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <div className="relative">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none pr-10"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Update Message Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Update Message
        </label>
        <textarea
          value={updateMessage}
          onChange={(e) => setUpdateMessage(e.target.value)}
          placeholder="Enter update message..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {/* Send Update Button */}
      <div className="w-full">
        <Button onClick={handleSendUpdate} disabled={!updateMessage.trim()} text='Send Update'/>
      </div>
    </div>
  );
};

export default ActionCard;