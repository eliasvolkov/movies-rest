import React from 'react';
import { H2 } from './Headline2.styles';

interface IHeadline1Props {
    children: React.ReactNode;
}

export const Headline2: React.FC<IHeadline1Props> = ({ children }) => {
    return <H2>{children}</H2>;
};
