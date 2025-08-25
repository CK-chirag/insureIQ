
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../commonComp/Button";

type LoginCardProps = {
	setIsSignUp: (value: boolean) => void;
};

const LoginCard: React.FC<LoginCardProps> = ({ setIsSignUp }) => {
	const navigate = useNavigate();

	const handlenavigation = () => {
		navigate('/dashboard')
	}

	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-sm mx-auto flex flex-col gap-6 border border-gray-200">
			<h2 className="text-center text-lg font-semibold mb-2">Login Into Your Account</h2>
			<form className="flex flex-col gap-4">
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address*</label>
					<input
						type="email"
						id="email"
						className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
						style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties }
						placeholder="Email address"
						required
					/>
				</div>
				<div>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Enter password</label>
					<input
						type="password"
						id="password"
						className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2"
						style={{ '--tw-ring-color': 'var(--color-custom-blue)' } as React.CSSProperties }
						placeholder="Enter password"
						required
					/>
				</div>
				<div className="text-right mb-2">
					<Link to="/forgot-password" className="text-xs underline" style={{ color: 'var(--color-custom-blue)' }}>forgot password</Link>
				</div>
				<Button type="submit" text="Continue" onClick={handlenavigation} />
			</form>
			<button
				className="w-full mt-2 hover:underline text-sm"
				type="button"
				onClick={() => setIsSignUp(true)}
			>
				Don't have an account? Sign up
			</button>
		</div>
	);
};

export default LoginCard;
