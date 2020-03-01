import React from 'react';
import { ButtonLabel, StyledButton } from './Button.styles';

interface IButtonProps {
    label: string;
    children?: React.ReactNode;
    isPrimary?: boolean;
    onClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ label, children, isPrimary, onClick }) => {
    return (
        <StyledButton isPrimary={isPrimary} onClick={onClick}>
            {children}
            <ButtonLabel>{label}</ButtonLabel>
        </StyledButton>
    );
};
