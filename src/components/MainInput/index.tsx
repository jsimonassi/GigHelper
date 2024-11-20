import React from 'react';
import { StyledBackground, StyledError, StyledInput, StyledTitle } from './styles';

interface MainInputProps {
    title?: string;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
    errorText?: string;
}

export const MainInput = ({ title, keyboardType, placeholder, value, onChangeText, errorText }: MainInputProps) => {
    return (
        <StyledBackground>
            <StyledTitle>{title}</StyledTitle>
            <StyledInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
            />
            { errorText && <StyledError>{errorText}</StyledError>}
        </StyledBackground>

    );
};
