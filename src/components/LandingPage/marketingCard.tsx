

import React from "react";

const avatarUrls = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/54.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
];

const MarketingCard: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl shadow-lg pt-10 pl-10 pr-10 max-w-md w-full mx-auto font-sans flex flex-col gap-4 md:max-w-lg lg:max-w-xl" style={{ height: '720px' }}>
            <div className="w-full h-50 md:h-56 rounded-xl overflow-hidden flex items-center justify-center bg-white">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="Health Insurance"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-1 pt-10">
                <h2 className="text-xl md:text-2xl font-bold mb-2 pb-4">Health Insurance</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Pellentesque In Nibh Sit Amet Eros Gravida Ullamcorper. Proin Eu Elit Efficitur, Euismod Nisi At, Facilisis Velit. Proin Placerat Volutpat Mi A Pellentesque. Curabitur Interdum Risus Eleifend Pulvinar Venenatis. Cras At Ligula Posuere, Efficitur Nisi Sit Amet, Tempus Sem. Curabitur Interdum Risus Eleifend Pulvinar Venenatis.
                </p>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <div className="flex text-yellow-400 text-lg">
                        {[...Array(4)].map((_, i) => (
                            <span key={i} className="opacity-100">★</span>
                        ))}
                        <span className="opacity-50">★</span>
                    </div>
                    <span className="text-gray-500 text-sm">4.8k Reviews</span>
                    <div className="flex items-center -space-x-2 ml-2">
                        {avatarUrls.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`avatar${idx + 1}`}
                                className="w-7 h-7 rounded-full border-2 border-white shadow-sm object-cover"
                            />
                        ))}
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-2 py-1 border-2 border-white ml-1">+40</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2 pt-10 justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-700 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-300 inline-block"></span>
                    <span className="text-blue-700 text-lg ml-2">→</span>
                </div>
            </div>
        </div>
    );
};

export default MarketingCard;
