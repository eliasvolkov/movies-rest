import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    handleClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ handleClick }) => {
    return <StyledButton onClick={handleClick}>My button</StyledButton>;
};
const StyledButton = styled.button`
    color: red;
`;
