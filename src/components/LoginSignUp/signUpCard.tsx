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
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[550px] h-auto flex flex-col gap-4 sm:gap-6 border border-gray-200 mx-auto">
            <h2 className="text-center text-lg sm:text-xl font-semibold mb-2">Create An Account</h2>
            
            <form className="flex flex-col gap-3 sm:gap-4">
                {/* Full Name and Mobile Number Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                    {/* Full Name */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="fullname" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Enter your full name" 
                            required 
                        />
                    </div>
                    
                    {/* Mobile Number */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Mobile Number *
                        </label>
                        <div className="flex rounded-md overflow-hidden border border-gray-300 hover:border-[var(--color-custom-blue)] focus-within:border-[var(--color-custom-blue)] focus-within:ring-2 focus-within:ring-[var(--color-custom-blue)]">
                            <select
                                id="countryCode"
                                name="countryCode"
                                className="px-2 sm:px-3 py-2 bg-gray-50 text-gray-700 focus:outline-none focus:ring-0 border-r border-gray-300 text-xs sm:text-sm"
                                defaultValue="+91"
                            >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                <option value="+61">+61</option>
                                <option value="+971">+971</option>
                            </select>
                            <input
                                type="tel"
                                id="mobile"
                                placeholder="10-digit number"
                                className="flex-1 px-3 sm:px-4 py-2 text-gray-700 focus:outline-none text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* PAN and Email Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                    {/* PAN Number */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="pan" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                        <input 
                            type="text" 
                            id="pan" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Enter PAN (optional)" 
                        />
                    </div>
                    
                    {/* Email */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email ID *</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Enter email address" 
                            required 
                        />
                    </div>
                </div>

                {/* Aadhaar Number */}
                <div className="w-full">
                    <label htmlFor="aadhaar" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Aadhaar Number *</label>
                    <input 
                        type="text" 
                        id="aadhaar" 
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                        style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                        placeholder="Enter 12-digit Aadhaar number" 
                        required 
                    />
                </div>

                {/* Password Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                    {/* Password */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="password" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password *</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Create strong password" 
                            required 
                        />
                    </div>
                    
                    {/* Confirm Password */}
                    <div className="w-full sm:flex-1">
                        <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Confirm password" 
                            required 
                        />
                    </div>
                </div>

                {/* Captcha */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-end">
                    <div className="flex-1">
                        <label htmlFor="captcha" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Captcha *</label>
                        <input 
                            type="text" 
                            id="captcha" 
                            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
                            style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties} 
                            placeholder="Enter captcha" 
                            required 
                        />
                    </div>
                    <div className="flex flex-row items-center gap-1 sm:gap-2">
                        <div className="bg-gray-100 border border-gray-400 rounded-lg px-3 sm:px-4 py-2 font-mono text-base sm:text-lg">Q9T04</div>
                        <button type="button" className="text-gray-500 text-sm sm:text-base underline p-1">&#8635;</button>
                    </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2 mt-2">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 flex-shrink-0"
                        style={{ color: 'var(--color-custom-blue)' }} 
                        required 
                    />
                    <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700">
                        I accept the <span className="underline">Terms & Conditions</span> and <span className="underline">Privacy Policy</span>
                    </label>
                </div>

                {/* Submit Button */}
                <Button 
                    type="submit" 
                    onClick={handlenavigation} 
                    className="max-w-full text-sm sm:text-base py-2 sm:py-3" 
                    text="Create your account" 
                />
            </form>

            {/* Sign In Link */}
            <button
                className="w-full hover:underline text-xs sm:text-sm p-0 text-gray-600 hover:text-gray-800"
                type="button"
                onClick={() => setIsSignUp(false)}
            >
                Already have an account? Sign in
            </button>
        </div>
    );
};

export default SignUpCard;