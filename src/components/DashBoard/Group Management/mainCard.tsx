import React from 'react';
import LeftCard from './leftCard';
import RightList from './rightList';
import Button from '../../commonComp/Button';

interface GroupData {
    planName: string;
    policyNumber: string;
    members: number;
    policyStart: string;
    policyEnd: string;
}

interface Member {
    id: string;
    name: string;
    relationship: string;
    dateAdded: string;
}

interface MainPageGroupManagementProps {
    groupData?: GroupData;
    membersList?: Member[];
    onViewDocuments?: () => void;
    onMemberSelect?: (memberId: string, selected: boolean) => void;
    onSelectAll?: (selected: boolean) => void;
    onExportList?: () => void;
    onAddMember?: () => void;
}

const MainPageGroupManagement: React.FC<MainPageGroupManagementProps> = ({
    groupData = {
        planName: "Family Health Plan",
        policyNumber: "GRP-12345678",
        members: 215,
        policyStart: "Jan 1, 2024",
        policyEnd: "Dec 31, 2024"
    },
    membersList,
    onViewDocuments,
    onMemberSelect,
    onSelectAll,
    onExportList,
    onAddMember
}) => {

    const handleViewDocuments = () => {
        console.log('View documents clicked');
        onViewDocuments?.();
        // Add your document viewing logic here
    };

    const handleMemberSelect = (memberId: string, selected: boolean) => {
        console.log(`Member ${memberId} ${selected ? 'selected' : 'deselected'}`);
        onMemberSelect?.(memberId, selected);
        // Add your member selection logic here
    };

    const handleSelectAll = (selected: boolean) => {
        console.log(`All members ${selected ? 'selected' : 'deselected'}`);
        onSelectAll?.(selected);
        // Add your select all logic here
    };

    const handleExportList = () => {
        console.log('Export list clicked');
        onExportList?.();
        // Add your export logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6 sm:p-8 lg:px-24 lg:py-10">
            <div className="max-w-7xl mx-auto">
                {/* Page Header with Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                    <h1 className="text-3xl font-bold text-gray-900">Group Management</h1>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Export List Button */}
                        <button
                            onClick={handleExportList}
                            className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-sm font-medium">Export List</span>
                        </button>

                        {/* Add Member Button */}
                        <Button
                            text="Export List"
                            icon={<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>}
                        />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                    {/* Left Side - Group Policy Details */}
                    <div className="lg:col-span-1">
                        <LeftCard
                            planName={groupData.planName}
                            policyNumber={groupData.policyNumber}
                            members={groupData.members}
                            policyStart={groupData.policyStart}
                            policyEnd={groupData.policyEnd}
                            onViewDocuments={handleViewDocuments}
                        />
                    </div>

                    {/* Right Side - Members List */}
                    <div className="lg:col-span-2">
                        <RightList
                            totalMembers={groupData.members}
                            members={membersList}
                            onMemberSelect={handleMemberSelect}
                            onSelectAll={handleSelectAll}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageGroupManagement;