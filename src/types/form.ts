export interface FieldOption {
    value: string;
    label: string;
    emoji?: string;
}

export interface BaseField {
    id: string;
    label: string;
    validation?: {
        required?: boolean;
        min?: number;
        max?: number;
    };
    value: string | string[];
}

export interface TextField extends BaseField {
    type: "text";
    placeholder?: string;
}

export interface NumberField extends BaseField {
    type: "number";
    placeholder?: string;
}

export interface NumberWithUnitField extends BaseField {
    type: "number-with-unit";
    unit: "kg" | "lbs";
}

export interface RadioField extends BaseField {
    type: "radio";
    options: FieldOption[];
}

export interface RadioEmojiField extends BaseField {
    type: "radio-emoji";
    options: FieldOption[];
}

export interface CheckboxField extends BaseField {
    type: "checkbox";
    options: FieldOption[];
}

export interface CheckboxEmojiField extends BaseField {
    type: "checkbox-emoji";
    options: FieldOption[];
}

export interface ImageRadioField extends BaseField {
    type: "image-radio";
    options: FieldOption[];
}

export type FormField =
    | TextField
    | NumberField
    | NumberWithUnitField
    | RadioField
    | RadioEmojiField
    | CheckboxField
    | CheckboxEmojiField
    | ImageRadioField;

export interface FormPage {
    id: string;
    title: string;
    fields: FormField[];
}

export interface FormTheme {
    primaryColor: string;
}

export interface PaymentConfig {
    enabled: boolean;
    stripeKey?: string;
}

export interface FormData {
    title: string;
    pages: FormPage[];
    theme: FormTheme;
    payment?: PaymentConfig;
}

export type PreviewData = Record<string, string | string[]>;
