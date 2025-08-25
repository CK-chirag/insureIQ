
import React from "react";
import { useNavigate } from "react-router";
import Button from "../commonComp/Button";

type SignUpCardProps = {
    setIsSignUp: (value: boolean) => void;
};

const SignUpCard: React.FC<SignUpCardProps> = ({ setIsSignUp }) => {
    const navigate = useNavigate();

    const handlenavigation = () => {
        navigate('/dashboard')
    }
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-[550px] h-auto flex flex-col gap-6 border border-gray-200">
            <h2 className="text-center text-lg font-semibold mb-2">Create An Account</h2>
            <form className="flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" id="fullname" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                        <input type="tel" id="mobile" className="w-[300px] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter your 10-digit mobile number" required />
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <input type="text" id="pan" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter your PAN number (optional)" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID *</label>
                        <input type="email" id="email" className="w-[300px] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter your email address" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number *</label>
                    <input type="text" id="aadhaar" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter your 12-digit Aadhaar number" required />
                </div>
                <div className="flex flex-row gap-2">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                        <input type="password" id="password" className="w-[238px] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Create a strong password" required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                        <input type="password" id="confirmPassword" className="w-[238px] px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Confirm your password" required />
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <div className="flex-1">
                        <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">Captcha *</label>
                        <input type="text" id="captcha" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} placeholder="Enter captcha" required />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <div className="bg-gray-100 border border-gray-400 rounded-lg px-4 py-2 font-mono text-lg">Q9T04</div>
                        <button type="button" className="text-gray-500 text-xs underline">&#8635;</button>
                    </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="terms" style={{ color: 'var(--color-custom-blue)' }} required />
                    <label htmlFor="terms" className="text-xs text-gray-700">I accept the <span className="underline">Terms & Conditions</span> and <span className="underline">Privacy Policy</span></label>
                </div>
                <Button type="submit" onClick={handlenavigation} className="max-w-full" text="Create your account" />
            </form>
            <button
                className="w-full hover:underline text-sm p-0"
                type="button"
                onClick={() => setIsSignUp(false)}
            >
                Already have an account? Sign in
            </button>
        </div>
    );
};

export default SignUpCard;
