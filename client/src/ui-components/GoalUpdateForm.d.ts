/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Goal } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GoalUpdateFormInputValues = {
    Description?: string;
    Active?: boolean;
};
export declare type GoalUpdateFormValidationValues = {
    Description?: ValidationFunction<string>;
    Active?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GoalUpdateFormOverridesProps = {
    GoalUpdateFormGrid?: FormProps<GridProps>;
    Description?: FormProps<TextFieldProps>;
    Active?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type GoalUpdateFormProps = React.PropsWithChildren<{
    overrides?: GoalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    goal?: Goal;
    onSubmit?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onSuccess?: (fields: GoalUpdateFormInputValues) => void;
    onError?: (fields: GoalUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GoalUpdateFormInputValues) => GoalUpdateFormInputValues;
    onValidate?: GoalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GoalUpdateForm(props: GoalUpdateFormProps): React.ReactElement;
