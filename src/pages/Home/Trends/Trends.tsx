import { Headline1 } from 'atoms/Headline1/Headline1';
import { Movies } from 'pages/Movies';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export const Trends: React.FC = () => {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <Headline1>Trends</Headline1>
            <Movies />
        </div>
    );
};
