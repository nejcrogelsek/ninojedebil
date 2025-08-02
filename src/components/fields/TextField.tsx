'use client';

interface TextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel' | 'number';
}

export default function TextField({
    label,
    value,
    onChange,
    placeholder = "Enter your answer",
    type = "text"
}: TextFieldProps) {
    return (
        <div className="field-container">
            <h2 className="field-title">{label}</h2>
            <input
                type={type}
                className="field-input-text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}
