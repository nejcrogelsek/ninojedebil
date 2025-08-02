'use client';

import { ArrowLeft } from 'lucide-react';
import Button from './Button';
import ProgressBar from './ProgressBar';

interface FormLayoutProps {
    children: React.ReactNode;
    title: string;
    currentPage: number;
    totalPages: number;
    onPrevious?: () => void;
    onNext?: () => void;
    onSubmit?: () => void;
    isLastPage: boolean;
}

export default function FormLayout({
    children,
    title,
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    onSubmit,
    isLastPage
}: FormLayoutProps) {
    return (
        <div className="p-6">
            <div className="form-container">
                {/* Header */}
                <div className="form-header">
                    <div className="flex-between">
                        {currentPage > 0 && onPrevious && (
                            <Button variant="secondary" onClick={onPrevious}>
                                <ArrowLeft size={20} />
                            </Button>
                        )}
                        <h1 className="text-form-header">
                            {title.toUpperCase()}
                        </h1>
                        <div></div>
                    </div>
                    <ProgressBar totalSteps={totalPages} currentStep={currentPage} />
                </div>

                {/* Content */}
                <div className="form-content animate-slide-in">
                    {children}
                </div>

                {/* Footer */}
                <div className="form-footer">
                    {isLastPage ? (
                        <Button variant="success" onClick={onSubmit}>
                            Complete Form
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={onNext}>
                            Next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
