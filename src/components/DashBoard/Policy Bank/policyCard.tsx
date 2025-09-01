import React from "react";
import { useNavigate } from "react-router-dom";

interface PolicyCardProps {
    isExpiringSoon?: boolean;
    daysUntilExpiry?: number;
    isGroup?: boolean;
    completionPercentage?: number;
    onRenew?: () => void;
    policyType?: string;
    insurer?: string;
    policyId?: string;
    memberCount?: number;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
    isExpiringSoon = false,
    daysUntilExpiry = 0,
    isGroup = false,
    completionPercentage = 60,
    onRenew,
    policyType = "Health Insurance",
    insurer = "Tata AIG Insurance",
    policyId = "2394577640",
    memberCount = 5
}) => {
    const navigate = useNavigate();

    return (
        <div
            className="relative z-0 h-fit bg-white rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] hover:border-2 hover:border-[var(--color-custom-blue)] flex flex-col"
            style={{
                minWidth: 320,
                maxWidth: 400,
                fontFamily: 'DM Sans, ui-sans-serif, system-ui, sans-serif',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onClick={() =>
                navigate("/dashboard/policy-details", {
                    state: {
                        isGroup,
                        completionPercentage,
                        isExpiringSoon,
                        daysUntilExpiry,
                        policyType,
                        insurer,
                        policyId,
                        memberCount,
                    },
                })
            }
        >
            {/* Image with Indicators */}
            <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubOPb1pDl9t7aDugXWoRw843NC1CbLHrf3Q&s"
                    alt={isGroup ? "Policy Group" : "Policy Individual"}
                    className="w-full h-full object-cover"
                />

                {/* Expiry/Renew Badge */}
                {isExpiringSoon && (
                    <div className="absolute top-3 left-3">
                        <button
                            className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold hover:bg-yellow-500 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                onRenew?.();
                            }}
                        >
                            Expires in {daysUntilExpiry} days - Renew
                        </button>
                    </div>
                )}

                {/* Group Indicator */}
                {isGroup && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-[var(--color-custom-blue)] rounded-full flex items-center justify-center shadow-lg">
                        <svg
                            fill="#ffffff"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            version="1.2"
                            baseProfile="tiny"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM20 15c.69 0 1.315-.279 1.768-.731.453-.452.732-1.077.732-1.769 0-.69-.279-1.315-.732-1.768-.453-.453-1.078-.732-1.768-.732-.691 0-1.316.279-1.769.732-.452.453-.731 1.078-.731 1.768 0 .691.279 1.316.731 1.769s1.078.731 1.769.731zM20 15.59c-1.331 0-2.332.406-2.917.968-1.115-.917-2.878-1.558-5.083-1.558-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.974-2.908-.974-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732.453-.453.732-1.078.732-1.768 0-.689-.279-1.314-.732-1.768-.453-.452-1.078-.732-1.768-.732-.691 0-1.316.28-1.769.732-.452.454-.731 1.079-.731 1.768 0 .69.279 1.315.731 1.768.453.453 1.078.732 1.769.732z"></path>
                        </svg>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
                {/* Header Section with Title + Completion Circle */}
                <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="font-bold text-lg text-gray-900 flex-1">
                        {isGroup ? `Group ${policyType}` : policyType}
                    </div>
                    {/* Completion Circle (compact, in line) */}
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <svg width="64" height="64" viewBox="0 0 80 80">
                            {Array.from({ length: 10 }).map((_, i) => {
                                const startAngle = 135 + i * 36; // segment + gap spacing
                                const endAngle = startAngle + 16; // smaller arc for block
                                const percentSegments = Math.round((completionPercentage / 100) * 10);
                                const isActive = i < percentSegments;

                                const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
                                    const rad = (angle - 90) * Math.PI / 180.0;
                                    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
                                };

                                const r = 30;
                                const cx = 40, cy = 40;
                                const start = polarToCartesian(cx, cy, r, startAngle);
                                const end = polarToCartesian(cx, cy, r, endAngle);

                                const pathData = [
                                    "M", start.x, start.y,
                                    "A", r, r, 0, 0, 1, end.x, end.y
                                ].join(" ");

                                return (
                                    <path
                                        key={i}
                                        d={pathData}
                                        stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                                        strokeWidth="6"
                                        fill="none"
                                        strokeLinecap="square"
                                    />
                                );
                            })}
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[8px] font-bold text-gray-800">{completionPercentage}%</span>
                        </div>
                    </div>
                </div>

                {/* Policy Details */}
                <div className="space-y-1 min-h-[48px]">
                    <div className="text-sm text-gray-600">{insurer}</div>
                    <div className="text-sm text-gray-600">Policy ID: {policyId}</div>
                    <div className="text-sm text-gray-600">
                        {isGroup ? `Members: ${memberCount}` : '\u00A0'}
                    </div>
                </div>

                {/* View Details */}
                <div className="flex flex-row mt-3 items-center justify-between">
                    <p className="text-sm underline hover:text-[#0055DE]">
                        View Details
                    </p>
                    <button
                        type="button"
                        className="p-2 rounded-lg hover:bg-gray-100 transition group flex items-center justify-center hover:cursor-pointer"
                    >
                        <img
                            className="w-[18px] h-[18px] mx-auto transition-transform duration-200 group-hover:scale-125"
                            src="https://cdn-icons-png.flaticon.com/128/5585/5585018.png"
                            alt="download"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyCard;
