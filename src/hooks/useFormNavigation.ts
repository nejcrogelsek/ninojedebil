'use client';

import { useState, useCallback } from 'react';
import type { FormData, PreviewData } from '../types/form';

export interface UseFormNavigationReturn {
    currentPageIndex: number;
    previewData: PreviewData;
    canGoNext: boolean;
    canGoPrevious: boolean;
    isLastPage: boolean;
    goNext: () => void;
    goPrevious: () => void;
    updateFieldValue: (fieldId: string, value: string | string[]) => void;
    submitForm: () => void;
}

export function useFormNavigation(formData: FormData): UseFormNavigationReturn {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [previewData, setPreviewData] = useState<PreviewData>({});

    const canGoNext = currentPageIndex < formData.pages.length - 1;
    const canGoPrevious = currentPageIndex > 0;
    const isLastPage = currentPageIndex === formData.pages.length - 1;

    const goNext = useCallback(() => {
        if (canGoNext) {
            setCurrentPageIndex(prev => prev + 1);
        }
    }, [canGoNext]);

    const goPrevious = useCallback(() => {
        if (canGoPrevious) {
            setCurrentPageIndex(prev => prev - 1);
        }
    }, [canGoPrevious]);

    const updateFieldValue = useCallback((fieldId: string, value: string | string[]) => {
        setPreviewData(prev => ({ ...prev, [fieldId]: value }));
    }, []);

    const submitForm = useCallback(() => {
        console.log('Form submitted:', previewData);
        alert('Form submitted! Data: ' + JSON.stringify(previewData, null, 2));
    }, [previewData]);

    return {
        currentPageIndex,
        previewData,
        canGoNext,
        canGoPrevious,
        isLastPage,
        goNext,
        goPrevious,
        updateFieldValue,
        submitForm,
    };
}
