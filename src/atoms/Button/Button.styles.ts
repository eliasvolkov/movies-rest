import { COLORS, FONTS } from 'constants/ui';
import styled from 'styled-components';
import { Add } from 'styled-icons/remix-fill/Add';

interface IStyledButton {
    isPrimary?: boolean;
}

export const StyledButton = styled.button<IStyledButton>`
    background-color: ${({ isPrimary }) => (isPrimary ? COLORS.primaryButton : '#000')};
    color: ${COLORS.primaryText};
    border: none;
    border-radius: 5rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    min-width: 20rem;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: ${({ isPrimary }) => isPrimary && `0 0.4rem 2.5rem ${COLORS.primaryButton}`};
    outline: none;
    transition: all 0.3s;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        ${({ isPrimary }) =>
            isPrimary ? `box-shadow: 0 0.4rem 4.5rem ${COLORS.primaryButton}` : `background-color: #2c2c2d ;`};
    }

    &:active {
        box-shadow: 0 0 0 2px ${COLORS.primaryButton};
    }
`;
export const ButtonLabel = styled.p`
    font-family: ${FONTS.primaryFont};
    font-size: 2.2rem;
    font-weight: bold;
`;

export const Icon = styled(Add)`
    color: ${COLORS.primaryText};
    /* font-weight: bold; */

    /* margin-left: 2rem; */
`;
