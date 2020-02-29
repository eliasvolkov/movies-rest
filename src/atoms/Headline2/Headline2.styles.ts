import styled from 'styled-components';
import { COLORS, FONTS } from '../../constants/ui';

export const H2 = styled.h2`
    font-family: ${FONTS.primaryFont};
    color: ${COLORS.primaryText};
    font-weight: bold;
    font-size: 1.6rem;

    margin-top: 3rem;
    margin-bottom: 1rem;
`;
