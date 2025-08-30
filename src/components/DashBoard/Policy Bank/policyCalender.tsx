import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Policy {
    id: number;
    name: string;
    icon: string;
    expiryDate: string;
    type: string;
    isGroup?: boolean;
}

const policiesData: Policy[] = [
    { id: 1, name: "Home Insurance", icon: "🏠", expiryDate: "2024-08-15", type: "Home" },
    { id: 2, name: "Auto Insurance", icon: "🚗", expiryDate: "2024-09-22", type: "Auto" },
    { id: 3, name: "Health Insurance", icon: "🛡️", expiryDate: "2025-10-10", type: "Health", isGroup: true },
    { id: 4, name: "Life Insurance", icon: "❤️", expiryDate: "2025-11-05", type: "Life" },
    { id: 5, name: "Travel Insurance", icon: "✈️", expiryDate: "2024-12-18", type: "Travel" },
    { id: 6, name: "Pet Insurance", icon: "🐾", expiryDate: "2026-01-20", type: "Pet" },
    { id: 7, name: "Business Insurance", icon: "🏢", expiryDate: "2026-02-14", type: "Business", isGroup: true },
    { id: 8, name: "Rental Insurance", icon: "🏘️", expiryDate: "2026-03-08", type: "Rental" },
    { id: 9, name: "Motorcycle Insurance", icon: "🏍️", expiryDate: "2025-11-02", type: "Motorcycle" },
    { id: 10, name: "Boat Insurance", icon: "⛵", expiryDate: "2025-12-16", type: "Boat" },
];

const PolicyCalendar: React.FC = () => {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("expiryDate");
    const [filter, setFilter] = useState("All Types");

    // Filter + Sort
    let filteredPolicies = policiesData.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filter !== "All Types") {
        filteredPolicies = filteredPolicies.filter(p => p.type === filter);
    }
    filteredPolicies.sort((a, b) =>
        sortBy === "expiryDate"
            ? new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()
            : a.name.localeCompare(b.name)
    );

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 w-full max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search policies..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Filter by:</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    >
                        <option>All Types</option>
                        <option>Home</option>
                        <option>Auto</option>
                        <option>Health</option>
                        <option>Life</option>
                        <option>Travel</option>
                        <option>Pet</option>
                        <option>Business</option>
                        <option>Rental</option>
                        <option>Motorcycle</option>
                        <option>Boat</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse">
                <thead className="border-b border-gray-300 bg-gray-50">
                    <tr className="text-gray-500 text-sm">
                        <th className="text-left py-2 px-3">Policy</th>
                        <th className="text-right py-2 px-3">Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPolicies.map((p) => {
                        const today = new Date();
                        const expDate = new Date(p.expiryDate);
                        const isExpired = expDate < today;
                        const isSoon =
                            (expDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) < 60;

                        return (
                            <tr
                                key={p.id}
                                className={`border-t border-gray-300 text-sm transition-colors ${isExpired
                                    ? "bg-red-50"
                                    : isSoon
                                        ? "bg-yellow-50"
                                        : "hover:bg-blue-50"
                                    }`}
                            >
                                <td className="py-3 px-3 flex items-center gap-2">
                                    <span className="text-lg">{p.icon}</span>
                                    <span className="font-medium">{p.name}</span>
                                    {p.isGroup && (
                                        <span className="inline-flex items-center ml-2 mr-4 text-xs text-blue-500 font-semibold">
                                            <svg
                                                fill="#2196F3"
                                                width="16px"
                                                height="16px"
                                                viewBox="0 0 24 24"
                                                version="1.2"
                                                baseProfile="tiny"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM20 15c.69 0 1.315-.279 1.768-.731.453-.452.732-1.077.732-1.769 0-.69-.279-1.315-.732-1.768-.453-.453-1.078-.732-1.768-.732-.691 0-1.316.279-1.769.732-.452.453-.731 1.078-.731 1.768 0 .691.279 1.316.731 1.769s1.078.731 1.769.731zM20 15.59c-1.331 0-2.332.406-2.917.968-1.115-.917-2.878-1.558-5.083-1.558-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.974-2.908-.974-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732.453-.453.732-1.078.732-1.768 0-.689-.279-1.314-.732-1.768-.453-.452-1.078-.732-1.768-.732-.691 0-1.316.28-1.769.732-.452.454-.731 1.079-.731 1.768 0 .69.279 1.315.731 1.768.453.453 1.078.732 1.769.732z"></path>
                                            </svg>
                                        </span>
                                    )}
                                </td>
                                <td
                                    className={`py-3 px-3 text-right font-medium ${isExpired
                                        ? "text-red-600"
                                        : isSoon
                                            ? "text-yellow-600"
                                            : "text-gray-600"
                                        }`}
                                >
                                    {p.expiryDate}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300 text-sm text-gray-500">
                <span>Showing {filteredPolicies.length} of {policiesData.length} results</span>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md border">
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-md border bg-blue-500 text-white">1</button>
                    <button className="p-2 rounded-md border">2</button>
                    <button className="p-2 rounded-md border">3</button>
                    <button className="p-2 rounded-md border">
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyCalendar;