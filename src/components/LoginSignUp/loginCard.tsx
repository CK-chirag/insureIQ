import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaMicrosoft } from "react-icons/fa";
import Button from "../commonComp/Button";
import { useNavigate } from "react-router";

interface LoginCardProps {
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginCard: React.FC<LoginCardProps> = ({ setIsSignUp }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        // Basic frontend validation
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        // Send to backend (always use HTTPS)
        // Example: fetch("/api/login", { ... })
        navigate("/dashboard");
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-800 py-2">
                    Welcome back at <span className="text-[var(--color-custom-blue)]">InsureVault</span> 👋
                </h1>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-6" onSubmit={handleLogin} autoComplete="off">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[var(--color-custom-blue)] focus:ring-[var(--color-custom-blue)] focus:outline-none"
                        value={email}
                        onChange={e => setEmail(e.target.value.replace(/[<>"']/g, ""))} // basic XSS prevention
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-[var(--color-custom-blue)] focus:ring-[var(--color-custom-blue)] focus:outline-none"
                        value={password}
                        onChange={e => setPassword(e.target.value.replace(/[<>"']/g, ""))} // basic XSS prevention
                        required
                    />
                    <div className="mt-1 text-right">
                        <a
                            href="#"
                            className="text-sm text-[var(--color-custom-blue)] hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                {/* Login button */}
                <Button
                    type="submit"
                    className="w-full py-2 sm:py-3 text-sm sm:text-base"
                    text="Login"
                />

                {/* Divider */}
                <div className="flex items-center gap-2">
                    <hr className="flex-1 border-gray-300" />
                    <span className="text-xs text-gray-400">or sign in with</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Social logins */}
                <div className="grid grid-cols-3 gap-3">
                    <button type="button" className="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                        <FcGoogle className="text-xl" />
                    </button>
                    <button type="button" className="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                        <FaMicrosoft className="text-blue-600 text-xl" />
                    </button>
                    <button type="button" className="flex items-center justify-center rounded-lg border border-gray-300 p-2 hover:bg-gray-100">
                        <FaApple className="text-black text-xl" />
                    </button>
                </div>

                {/* Signup */}
                <p className="text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <button
                        type="button"
                        onClick={() => setIsSignUp(true)}
                        className="text-[var(--color-custom-blue)] hover:underline"
                    >
                        Sign up
                    </button>
                </p>
            </form>
        </div>
    );
};

export default LoginCard;