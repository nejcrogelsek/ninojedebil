'use client';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'unit-active' | 'unit-inactive';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit';
}

export default function Button({
    children,
    onClick,
    variant = 'primary',
    className = '',
    disabled = false,
    type = 'button'
}: ButtonProps) {
    const baseClasses = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantClasses = {
        primary: 'btn-primary btn-next',
        secondary: 'btn-nav-arrow',
        success: 'btn-primary btn-submit',
        'unit-active': 'btn-unit btn-unit-active',
        'unit-inactive': 'btn-unit btn-unit-inactive',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </button>
    );
}
