import React, { useState, useMemo } from 'react';

interface Member {
    id: string;
    name: string;
    relationship: string;
    dateAdded: string;
    selected?: boolean;
}

interface RightListProps {
    totalMembers?: number;
    members?: Member[];
    onMemberSelect?: (memberId: string, selected: boolean) => void;
    onSelectAll?: (selected: boolean) => void;
}

const RightList: React.FC<RightListProps> = ({
    totalMembers = 215,
    members = [
        {
            id: '1',
            name: 'Robert Fox',
            relationship: 'Spouse',
            dateAdded: 'Jan 1, 2024'
        },
        {
            id: '2',
            name: 'Emily Johnson',
            relationship: 'Daughter',
            dateAdded: 'Jan 1, 2024'
        },
        {
            id: '3',
            name: 'Michael Brown',
            relationship: 'Son',
            dateAdded: 'Jan 1, 2024'
        },
        {
            id: '4',
            name: 'Jessica Davis',
            relationship: 'Mother',
            dateAdded: 'Feb 15, 2024'
        },
        {
            id: '5',
            name: 'David Wilson',
            relationship: 'Father',
            dateAdded: 'Mar 10, 2024'
        }
    ],
    onMemberSelect,
    onSelectAll
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMembers, setSelectedMembers] = useState<Set<string>>(new Set());
    const [allSelected, setAllSelected] = useState(false);

    const itemsPerPage = 5;

    // Filter members based on search term
    const filteredMembers = useMemo(() => {
        return members.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.relationship.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [members, searchTerm]);

    // Paginate filtered results
    const paginatedMembers = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredMembers.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredMembers, currentPage]);

    const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

    const handleMemberSelect = (memberId: string) => {
        const newSelectedMembers = new Set(selectedMembers);
        if (selectedMembers.has(memberId)) {
            newSelectedMembers.delete(memberId);
        } else {
            newSelectedMembers.add(memberId);
        }
        setSelectedMembers(newSelectedMembers);
        setAllSelected(newSelectedMembers.size === paginatedMembers.length);
        onMemberSelect?.(memberId, !selectedMembers.has(memberId));
    };

    const handleSelectAll = () => {
        if (allSelected) {
            setSelectedMembers(new Set());
            setAllSelected(false);
            onSelectAll?.(false);
        } else {
            const allIds = new Set(paginatedMembers.map(member => member.id));
            setSelectedMembers(allIds);
            setAllSelected(true);
            onSelectAll?.(true);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setSelectedMembers(new Set());
        setAllSelected(false);
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${i === currentPage
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 w-full">
            {/* Header with Search */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Group Members ({totalMembers})
                </h2>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-full">
                    {/* Header */}
                    <thead className="border-b border-gray-100">
                        <tr>
                            <th className="text-left py-3 px-2">
                                <input
                                    type="checkbox"
                                    checked={allSelected}
                                    onChange={handleSelectAll}
                                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                            </th>
                            <th className="text-left py-3 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                MEMBER NAME
                            </th>
                            <th className="text-left py-3 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                                RELATIONSHIP
                            </th>
                            <th className="text-left py-3 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                                DATE ADDED
                            </th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-200">
                        {paginatedMembers.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50">
                                <td className="py-4 px-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedMembers.has(member.id)}
                                        onChange={() => handleMemberSelect(member.id)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </td>
                                <td className="py-4 px-2">
                                    <div className="font-medium text-gray-900 text-sm">
                                        {member.name}
                                    </div>
                                    {/* Mobile: Show relationship below name */}
                                    <div className="text-xs text-gray-500 sm:hidden mt-1">
                                        {member.relationship}
                                    </div>
                                </td>
                                <td className="py-4 px-2 text-sm text-gray-500 hidden sm:table-cell">
                                    {member.relationship}
                                </td>
                                <td className="py-4 px-2 text-sm text-gray-500 hidden md:table-cell">
                                    {member.dateAdded}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Empty State */}
            {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No members found</h3>
                    <p className="mt-1 text-sm text-gray-500">Try adjusting your search terms.</p>
                </div>
            )}

            {/* Single Pagination Section - Compact Design */}
            <div className="w-stretch flex items-center justify-between mt-4 pt-6 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredMembers.length)}-{Math.min(currentPage * itemsPerPage, filteredMembers.length)} of {totalMembers}
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-2 py-1 text-xs text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>

                    <div className="flex gap-0.5 mx-2">
                        {renderPageNumbers()}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-2 py-1 text-xs text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightList;