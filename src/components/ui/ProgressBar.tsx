'use client';

interface ProgressBarProps {
    totalSteps: number;
    currentStep: number;
}

export default function ProgressBar({ totalSteps, currentStep }: ProgressBarProps) {
    return (
        <div className="flex-gap-1">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div
                    key={index}
                    className={`progress-segment ${
                        index <= currentStep ? "progress-segment-active" : "progress-segment-inactive"
                    }`}
                />
            ))}
        </div>
    );
}
