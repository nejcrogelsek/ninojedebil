'use client';

interface Option {
    value: string;
    label: string;
    emoji?: string;
}

interface CheckboxEmojiFieldProps {
    label: string;
    options: Option[];
    value: string[];
    onChange: (value: string[]) => void;
}

export default function CheckboxEmojiField({
    label,
    options,
    value,
    onChange
}: CheckboxEmojiFieldProps) {
    const handleToggle = (optionValue: string) => {
        const isSelected = value.includes(optionValue);
        const newValues = isSelected
            ? value.filter((v) => v !== optionValue)
            : [...value, optionValue];
        onChange(newValues);
    };

    return (
        <div className="field-container">
            <h2 className="field-title">{label}</h2>
            <div className="space-y-3">
                {options.map((option) => {
                    const isSelected = value.includes(option.value);

                    return (
                        <button
                            key={option.value}
                            className={`btn-checkbox ${
                                isSelected
                                    ? "btn-option-selected"
                                    : "btn-option-unselected"
                            }`}
                            onClick={() => handleToggle(option.value)}
                        >
                            <div className="flex gap-3 items-center">
                                <span className="text-option-emoji">{option.emoji}</span>
                                <span className="text-option-label">{option.label}</span>
                            </div>
                            <div
                                className={`checkbox-container ${
                                    isSelected
                                        ? "checkbox-checked"
                                        : "checkbox-unchecked"
                                }`}
                            >
                                {isSelected && (
                                    <svg
                                        className="checkbox-icon"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
