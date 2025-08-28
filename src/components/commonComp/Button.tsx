import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    text?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
};

const Button: React.FC<ButtonProps> = ({ 
    text, 
    children, 
    icon, 
    iconPosition = 'left',
    className = "", 
    ...props 
}) => (
    <button
        className={`bg-[#0055DE] text-white rounded-xl px-6 py-3 hover:cursor-pointer font-normal text-sm max-w-full shadow-md hover:bg-blue-700 transition flex items-center justify-center gap-2 ${className}`}
        {...props}
    >
        {icon && iconPosition === 'left' && (
            <span className="flex items-center justify-center">
                {icon}
            </span>
        )}
        {text || children}
        {icon && iconPosition === 'right' && (
            <span className="flex items-center justify-center">
                {icon}
            </span>
        )}
    </button>
);

export default Button;