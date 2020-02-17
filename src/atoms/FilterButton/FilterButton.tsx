import React from 'react';
import { StyledButton } from './FilterButton.styles';

interface IFilterButtonProps {
    isActive: boolean;
    handleClick: () => void;
    children: React.ReactNode;
}

export const FilterButton: React.FC<IFilterButtonProps> = ({ children, isActive, handleClick }) => {
    return (
        <StyledButton isActive={isActive} onClick={handleClick}>
            {children}
        </StyledButton>
    );
};
