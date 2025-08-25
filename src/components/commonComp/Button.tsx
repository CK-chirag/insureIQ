import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	text?: string;
};

const Button: React.FC<ButtonProps> = ({ text, children, className = "", ...props }) => (
	<button
		className={`bg-[#0055DE] text-white rounded-lg px-6 py-3 font-normal text-sm max-w-full shadow-md hover:bg-blue-700 transition ${className}`}
		{...props}
	>
		{text || children}
	</button>
);

export default Button;
