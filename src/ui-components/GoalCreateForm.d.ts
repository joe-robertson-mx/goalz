/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoalCreateFormInputValues = {
    Description?: string;
    Active?: boolean;
};
export declare type GoalCreateFormValidationValues = {
    Description?: ValidationFunction<string>;
    Active?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalCreateFormOverridesProps = {
    GoalCreateFormGrid?: FormProps<GridProps>;
    Description?: FormProps<TextFieldProps>;
    Active?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GoalCreateFormProps = React.PropsWithChildren<{
    overrides?: GoalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onSuccess?: (fields: GoalCreateFormInputValues) => void;
    onError?: (fields: GoalCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GoalCreateFormInputValues) => GoalCreateFormInputValues;
    onValidate?: GoalCreateFormValidationValues;
} & React.CSSProperties>;
export default function GoalCreateForm(props: GoalCreateFormProps): React.ReactElement;
