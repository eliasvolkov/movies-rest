import { COLORS, FONTS } from 'constants/ui';
import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: ${FONTS.primaryFont};
    color: ${COLORS.primaryText};
    font-weight: 700;
    font-size: 5rem;

    margin-bottom: 5rem;
`;
