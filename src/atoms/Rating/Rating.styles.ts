import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { Star } from 'styled-icons/remix-fill/Star';

export const StyledSpan = styled.span`
    color: ${COLORS.gold};
    font-size: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Icon = styled(Star)`
    margin-right: 0.5rem;
`;
