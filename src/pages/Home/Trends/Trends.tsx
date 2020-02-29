import { Headline1 } from 'atoms/Headline1/Headline1';
import { Movies } from 'pages/Movies';
import React from 'react';

export const Trends: React.FC = () => {
    return (
        <div>
            <Headline1>Trends</Headline1>
            <Movies />
        </div>
    );
};
