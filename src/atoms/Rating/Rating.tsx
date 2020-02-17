import React from 'react';
import { Icon, StyledSpan } from './Rating.styles';

interface IRatingProps {
    title: number;
}

export const Rating: React.FC<IRatingProps> = ({ title }) => {
    return (
        <StyledSpan>
            <Icon size={14} />
            {title}
        </StyledSpan>
    );
};
