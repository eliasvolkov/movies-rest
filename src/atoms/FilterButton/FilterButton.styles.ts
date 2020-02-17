import { COLORS, FONTS } from 'constants/ui';
import styled from 'styled-components';

interface IStyledButton {
    isActive: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    min-width: 20rem;
    text-transform: capitalize;
    font-family: ${FONTS.primaryFont};
    font-weight: bold;
    font-size: 1.4rem;

    padding: 1.5rem;
    margin: 3rem;

    background-color: ${({ isActive }) => (isActive ? COLORS.primaryButton : COLORS.secondButton)};
    color: ${COLORS.primaryText};
    border: none;
    border-radius: 5rem;
    outline: none;

    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? COLORS.primaryButton : COLORS.darkgrey)};
        cursor: pointer;
    }
`;
