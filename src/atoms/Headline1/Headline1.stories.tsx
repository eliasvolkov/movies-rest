import React from 'react';
import { Subtitle1 } from '../Subtitle1/Subtitle1';
import { Headline1 } from './Headline1';

// tslint:disable-next-line: no-default-export
export default {
    title: 'Headline1',
    component: Headline1,
};

export const Default = () => <Headline1>Starnger things</Headline1>;

export const WithSubtitle = () => (
    <>
        <Headline1>Starnger things</Headline1>
        <Subtitle1>
            {' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore laboriosam? Necessitatibus
            ducimus tempore possimus blanditiis similique officia! Asperiores non error ducimus eius repudiandae
            necessitatibus praesentium enim dicta repellat saepe!
        </Subtitle1>
    </>
);
