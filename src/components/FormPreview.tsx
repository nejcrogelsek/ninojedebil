'use client';

import type { FormData, FormField } from '../types/form';
import { useFormNavigation } from '../hooks/useFormNavigation';
import FormLayout from './ui/FormLayout';
import NumberWithUnitField from './fields/NumberWithUnitField';
import RadioEmojiField from './fields/RadioEmojiField';
import CheckboxEmojiField from './fields/CheckboxEmojiField';
import TextField from './fields/TextField';
import { JSX } from 'react';

interface FormPreviewProps {
    formData: FormData;
}

export default function FormPreview({ formData }: FormPreviewProps) {
    const {
        currentPageIndex,
        previewData,
        canGoPrevious,
        isLastPage,
        goNext,
        goPrevious,
        updateFieldValue,
        submitForm,
    } = useFormNavigation(formData);

    const getCurrentFieldValue = (field: FormField): string | string[] => {
        return previewData[field.id] ?? (field.type.includes("checkbox") ? [] : "");
    };

    const renderFieldPreview = (field: FormField): JSX.Element => {
        const currentValue = getCurrentFieldValue(field);

        switch (field.type) {
            case "number-with-unit": {
                const numberField = field as any;
                return (
                    <NumberWithUnitField
                        label={field.label}
                        value={currentValue as string}
                        unit={numberField.unit || "kg"}
                        onChange={(value) => updateFieldValue(field.id, value)}
                    />
                );
            }

            case "radio-emoji": {
                const radioField = field as any;
                return (
                    <RadioEmojiField
                        label={field.label}
                        options={radioField.options || []}
                        value={currentValue as string}
                        onChange={(value) => updateFieldValue(field.id, value)}
                    />
                );
            }

            case "checkbox-emoji": {
                const checkboxField = field as any;
                return (
                    <CheckboxEmojiField
                        label={field.label}
                        options={checkboxField.options || []}
                        value={currentValue as string[]}
                        onChange={(value) => updateFieldValue(field.id, value)}
                    />
                );
            }

            default: {
                const textField = field as any;
                return (
                    <TextField
                        label={field.label}
                        value={currentValue as string}
                        onChange={(value) => updateFieldValue(field.id, value)}
                        placeholder={textField.placeholder || "Enter your answer"}
                        type={field.type === "number" ? "number" : "text"}
                    />
                );
            }
        }
    };

    return (
        <FormLayout
            title={formData.pages[currentPageIndex]?.title || 'Form'}
            currentPage={currentPageIndex}
            totalPages={formData.pages.length}
            onPrevious={canGoPrevious ? goPrevious : undefined}
            onNext={goNext}
            onSubmit={submitForm}
            isLastPage={isLastPage}
        >
            {formData.pages[currentPageIndex]?.fields.map((field) => (
                <div key={field.id} className="mb-8">
                    {renderFieldPreview(field)}
                </div>
            ))}
        </FormLayout>
    );
}
