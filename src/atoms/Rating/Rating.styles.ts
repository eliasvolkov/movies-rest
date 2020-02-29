import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { StarS } from 'styled-icons/remix-fill/StarS';

interface IRating {
    color?: string;
    fontSize?: string;
}

export const StyledSpan = styled.span<IRating>`
    color: ${({ color }) => color || COLORS.gold};
    font-size: ${({ fontSize }) => fontSize || '1.4rem'};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

export const Icon = styled(StarS)`
    margin-right: 0.5rem;
    color: ${COLORS.gold};
`;
