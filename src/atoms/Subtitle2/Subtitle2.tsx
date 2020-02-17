import React from 'react';
import { P2 } from './Subtitle2.styles';

interface IHeadline1Props {
    children: React.ReactNode;
}

export const Subtitle2: React.FC<IHeadline1Props> = ({ children }) => {
    return <P2>{children}</P2>;
};
