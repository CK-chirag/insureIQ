import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../commonComp/Button";

type SignUpCardProps = {
    setIsSignUp: (value: boolean) => void;
};

function generateCaptcha() {
    // Simple random 5-character alphanumeric captcha
    return Math.random().toString(36).substring(2, 7).toUpperCase();
}

const SignUpCard: React.FC<SignUpCardProps> = ({ setIsSignUp }) => {
    const navigate = useNavigate();

    // State for form fields
    const [form, setForm] = useState({
        fullname: "",
        mobile: "",
        countryCode: "+91",
        pan: "",
        aadhaar: "",
        email: "",
        password: "",
        confirmPassword: "",
        captcha: "",
        terms: false,
    });
    const [error, setError] = useState("");
    const [captcha, setCaptcha] = useState(generateCaptcha());

    // Basic validation functions
    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateAadhaar = (aadhaar: string) =>
        /^\d{12}$/.test(aadhaar);

    const validateMobile = (mobile: string) =>
        /^\d{10}$/.test(mobile);

    const validatePAN = (pan: string) =>
        pan === "" || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const { name, value, type } = target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? (target as HTMLInputElement).checked : value.replace(/[<>"']/g, ""), // basic XSS prevention
        }));
    };

    const handleRefreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setForm(prev => ({ ...prev, captcha: "" }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Frontend validation
        if (!form.fullname.trim()) return setError("Full name is required.");
        if (!validateMobile(form.mobile)) return setError("Enter a valid 10-digit mobile number.");
        if (!validateAadhaar(form.aadhaar)) return setError("Enter a valid 12-digit Aadhaar number.");
        if (!validateEmail(form.email)) return setError("Enter a valid email address.");
        if (!validatePAN(form.pan)) return setError("Enter a valid PAN number.");
        if (form.password.length < 6) return setError("Password must be at least 6 characters.");
        if (form.password !== form.confirmPassword) return setError("Passwords do not match.");
        if (!form.captcha.trim()) return setError("Captcha is required.");
        if (form.captcha.toUpperCase() !== captcha) return setError("Captcha does not match.");
        if (!form.terms) return setError("You must accept the Terms & Conditions.");

        // Send to backend (always use HTTPS, backend must prevent SQLi, CSRF, CORS)
        // Example: fetch("/api/signup", { ... })
        navigate("/dashboard");
    };

    return (
        <div className="w-full max-w-xl rounded-2xl bg-white shadow-lg border border-gray-200 p-6 sm:p-8 flex flex-col max-h-[90vh]">
            {/* Scrollable content */}
            <div className="flex-1 pr-2">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-xl font-bold text-gray-800 py-2">
                        Create your <span className="text-[var(--color-custom-blue)]">Account</span> ✨
                    </h1>
                </div>

                <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit} autoComplete="off">
                    {/* Full Name + Mobile */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:flex-1">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Enter your full name"
                                value={form.fullname}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="w-full sm:flex-1">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number *
                            </label>
                            <div className="flex rounded-lg overflow-hidden border border-gray-300 focus-within:border-[var(--color-custom-blue)] focus-within:ring-2 focus-within:ring-[var(--color-custom-blue)]">
                                <select
                                    id="countryCode"
                                    name="countryCode"
                                    className="px-3 py-2 bg-gray-50 text-gray-700 border-r border-gray-300 text-sm focus:outline-none"
                                    value={form.countryCode}
                                    onChange={handleChange}
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
                                    name="mobile"
                                    placeholder="10-digit number"
                                    className="flex-1 px-3 py-2 text-sm text-gray-700 focus:outline-none"
                                    value={form.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* PAN + Aadhaar + Email */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:flex-1">
                            <label htmlFor="pan" className="block text-sm font-medium text-gray-700 mb-1">
                                PAN Number
                            </label>
                            <input
                                type="text"
                                id="pan"
                                name="pan"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Enter PAN (optional)"
                                value={form.pan}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
                                Aadhaar Number *
                            </label>
                            <input
                                type="text"
                                id="aadhaar"
                                name="aadhaar"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Enter 12-digit Aadhaar number"
                                value={form.aadhaar}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="w-full sm:flex-1">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email ID *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Enter email address"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Password + Confirm */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="w-full sm:flex-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password *
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Create strong password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="w-full sm:flex-1">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password *
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Confirm password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Captcha */}
                    <div className="flex flex-col sm:flex-row gap-3 items-end">
                        <div className="flex-1">
                            <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
                                Captcha *
                            </label>
                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                                style={{ "--tw-ring-color": "var(--color-custom-blue)" } as React.CSSProperties}
                                placeholder="Enter captcha"
                                value={form.captcha}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-100 border border-gray-400 rounded-lg px-4 py-2 font-mono text-md select-none">
                                {captcha}
                            </div>
                            <button type="button" className="text-gray-500 text-sm underline p-1" onClick={handleRefreshCaptcha} title="Refresh captcha">
                                &#8635;
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="mt-1"
                            checked={form.terms}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700">
                            I accept the <span className="underline">Terms & Conditions</span> and{" "}
                            <span className="underline">Privacy Policy</span>
                        </label>
                    </div>

                    {/* Error message */}
                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full py-2 sm:py-3 text-sm sm:text-base"
                        text="Create your account"
                    />
                </form>
            </div>

            {/* Sign In link */}
            <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-[var(--color-custom-blue)] hover:underline"
                >
                    Sign in
                </button>
            </p>
        </div>
    );
};

export default SignUpCard;