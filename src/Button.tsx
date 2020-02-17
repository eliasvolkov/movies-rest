import React from 'react';
import styled from 'styled-components';
import { uiConstants } from './constants/ui';
interface IButtonProps {
    handleClick: () => void;
}

export const Button: React.FC<IButtonProps> = ({ handleClick }) => {
    return <StyledButton onClick={handleClick}>My buttn</StyledButton>;
};
const StyledButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: ${uiConstants.mainFont};
    background-color: ${uiConstants.threeBlack};
    border: none;
    width: 200px;
    border-radius: 50px;
    padding: 10px;
    padding-top: 15px;
    font-size: 1.4rem;
`;
