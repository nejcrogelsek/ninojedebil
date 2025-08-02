import type { FormField, PreviewData } from '../types/form';

export const getFieldValue = (
    field: FormField,
    previewData: PreviewData
): string | string[] => {
    return previewData[field.id] ?? (field.type.includes("checkbox") ? [] : "");
};

export const updateFieldValue = (
    fieldId: string,
    value: string | string[],
    previewData: PreviewData
): PreviewData => {
    return { ...previewData, [fieldId]: value };
};

export const validateField = (field: FormField, value: string | string[]): boolean => {
    if (field.validation?.required) {
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return value.toString().trim().length > 0;
    }
    return true;
};

export const getFormProgress = (
    pages: any[],
    currentPageIndex: number
): number => {
    return Math.round(((currentPageIndex + 1) / pages.length) * 100);
};
