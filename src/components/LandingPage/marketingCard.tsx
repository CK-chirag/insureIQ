import React from "react";

const avatarUrls = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/54.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
];

const MarketingCard: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-auto font-sans flex flex-col gap-3 sm:gap-4 min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[720px]">
            {/* Image Container */}
            <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Health Insurance"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="px-1 pt-4 sm:pt-6 md:pt-8 lg:pt-10 flex-1 flex flex-col">
                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 pb-2 sm:pb-3 md:pb-4">
                    Health Insurance
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-1">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque In Nibh Sit Amet Eros Gravida Ullamcorper. Proin Eu Elit Efficitur, Euismod Nisi At, Facilisis Velit. Proin Placerat Volutpat Mi A Pellentesque. Curabitur Interdum Risus Eleifend Pulvinar Venenatis. Cras At Ligula Posuere, Efficitur Nisi Sit Amet, Tempus Sem. Curabitur Interdum Risus Eleifend Pulvinar Venenatis.
                </p>

                {/* Reviews and Avatars */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 flex-wrap">
                    {/* Stars and Reviews */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex text-yellow-400 text-sm sm:text-base md:text-lg">
                            {[...Array(4)].map((_, i) => (
                                <span key={i} className="opacity-100">★</span>
                            ))}
                            <span className="opacity-50">★</span>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">4.8k Reviews</span>
                    </div>

                    {/* Avatar Stack */}
                    <div className="flex items-center -space-x-2 ml-0 sm:ml-2">
                        {avatarUrls.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`avatar${idx + 1}`}
                                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow-sm object-cover"
                            />
                        ))}
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 border-2 border-white ml-1">
                            +40
                        </span>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2 mt-4 sm:mt-6 md:mt-8 lg:mt-10 justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-700 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-300 inline-block"></span>
                    <span className="text-blue-700 text-base sm:text-lg ml-2">→</span>
                </div>
            </div>
        </div>
    );
};

export default MarketingCard;