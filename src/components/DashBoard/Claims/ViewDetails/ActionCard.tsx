import React, { useState, useRef, useEffect } from 'react';
import Button from '../../../commonComp/Button';

interface ActionCardProps {
  currentStatus?: string;
  onStatusUpdate?: (status: string, message: string) => void;
  statusOptions?: string[];
}

const ActionCard: React.FC<ActionCardProps> = ({
  currentStatus = "Processing",
  onStatusUpdate,
  statusOptions = ["Processing", "Under Review", "Approved", "Rejected", "Completed", "On Hold"]
}) => {
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [updateMessage, setUpdateMessage] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSendUpdate = () => {
    if (updateMessage.trim()) {
      onStatusUpdate?.(selectedStatus, updateMessage);
      setUpdateMessage('');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Agent Actions
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Update policy status and send a message to the agent.
        </p>
      </div>

      {/* Status Dropdown */}
      <div className="mb-6 relative" ref={dropdownRef}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        >
          {selectedStatus}
          <svg className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-10">
            <ul className="py-2 max-h-60 overflow-auto">
              {statusOptions.map((status) => (
                <li key={status}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStatus(status);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {status}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Update Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Update Message
        </label>
        <textarea
          value={updateMessage}
          onChange={(e) => setUpdateMessage(e.target.value)}
          placeholder="Enter update message..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none shadow-sm"
        />
      </div>

      {/* Send Update Button */}
      <div className="w-full">
        <Button onClick={handleSendUpdate} disabled={!updateMessage.trim()} text='Send Update' />
      </div>
    </div>
  );
};

export default ActionCard;
