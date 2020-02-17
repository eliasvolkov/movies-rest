import { Headline1 } from 'atoms/Headline1/Headline1';
import React from 'react';
import { Subtitle1 } from '../Subtitle1/Subtitle1';

// tslint:disable-next-line: no-default-export
export default {
    title: 'Subtitle1',
    component: Subtitle1,
};

export const Default = () => <Subtitle1>Starnger things</Subtitle1>;

export const WithHeadline = () => (
    <>
        <Headline1>Starnger things</Headline1>
        <Subtitle1> Othet text</Subtitle1>
    </>
);
