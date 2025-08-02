'use client';

import { useState } from 'react';
import Button from '../ui/Button';

interface NumberWithUnitFieldProps {
    label: string;
    value: string;
    unit: 'kg' | 'lbs';
    onChange: (value: string) => void;
    onUnitChange?: (unit: 'kg' | 'lbs') => void;
}

export default function NumberWithUnitField({
    label,
    value,
    unit,
    onChange,
    onUnitChange
}: NumberWithUnitFieldProps) {
    const [localUnit, setLocalUnit] = useState(unit);

    const handleUnitChange = (newUnit: 'kg' | 'lbs') => {
        setLocalUnit(newUnit);
        onUnitChange?.(newUnit);
    };

    return (
        <div className="field-container">
            <h2 className="field-title">{label}</h2>
            <div className="flex-gap-2">
                <Button
                    variant={localUnit === "kg" ? "unit-active" : "unit-inactive"}
                    onClick={() => handleUnitChange("kg")}
                >
                    kg
                </Button>
                <Button
                    variant={localUnit === "lbs" ? "unit-active" : "unit-inactive"}
                    onClick={() => handleUnitChange("lbs")}
                >
                    lbs
                </Button>
            </div>
            <div className="flex-center">
                <input
                    type="number"
                    className="field-input-large"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="60"
                />
                <span className="field-unit-text">{localUnit}</span>
            </div>
            {value && (
                <div className="card-insight">
                    <div className="flex-center">
                        <div className="card-insight-icon">
                            ✓
                        </div>
                        <span className="text-insight">
                            Your BMI is 21.3 which is considered normal</span>
                    </div>
                    <p className="text-insight-description">
                        You're starting from a great place! Now we'll use your BMI to create a program tailored to your needs.
                    </p>
                </div>
            )}
        </div>
    );
}
