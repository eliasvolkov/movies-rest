import React from 'react';
import { ButtonLabel, StyledButton } from './Button.styles';

interface IButtonProps {
    label: string;
    children?: React.ReactNode;
    isPrimary?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ label, children, isPrimary }) => {
    return (
        <StyledButton isPrimary={isPrimary}>
            {children}
            <ButtonLabel>{label}</ButtonLabel>
        </StyledButton>
    );
};
