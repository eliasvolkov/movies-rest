import React from 'react';
import { Icon, StyledSpan } from './Rating.styles';

interface IRatingProps {
    title: number;
    iconSize?: number;
    color?: string;
    fontSize?: string;
}

export const Rating: React.FC<IRatingProps> = ({ title, iconSize, color, fontSize }) => {
    return (
        <StyledSpan color={color} fontSize={fontSize}>
            <Icon size={iconSize || 19} />
            {title}
        </StyledSpan>
    );
};
