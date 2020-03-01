import React from 'react';
import { H1 } from './Headline1.styles';

interface IHeadline1Props {
    children: React.ReactNode;
}

export const Headline1: React.FC<IHeadline1Props> = ({ children }) => {
    return <H1>{children}</H1>;
};
