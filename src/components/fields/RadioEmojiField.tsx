'use client';

interface Option {
    value: string;
    label: string;
    emoji?: string;
}

interface RadioEmojiFieldProps {
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

export default function RadioEmojiField({
    label,
    options,
    value,
    onChange
}: RadioEmojiFieldProps) {
    return (
        <div className="field-container">
            <h2 className="field-title">{label}</h2>
            <div className="space-y-3">
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`btn-option ${
                            value === option.value
                                ? "btn-option-selected"
                                : "btn-option-unselected"
                        }`}
                        onClick={() => onChange(option.value)}
                    >
                        <span className="text-option-emoji">{option.emoji}</span>
                        <span className="text-option-label">{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
