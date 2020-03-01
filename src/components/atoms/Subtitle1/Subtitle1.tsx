import React from 'react';
import { P } from './Subtitle1.styles';

interface ISubtitle1Props {
    children: React.ReactNode;
}

export const Subtitle1: React.FC<ISubtitle1Props> = ({ children }) => {
    return <P>{children}</P>;
};
