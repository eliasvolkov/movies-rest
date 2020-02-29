import { Headline1 } from 'atoms/Headline1/Headline1';
import { observer } from 'mobx-react';
import Movies from 'pages/Movies';
import React from 'react';

export const Trends: React.FC = observer(() => {
    return (
        <div>
            <Headline1>Trends</Headline1>
            <Movies />
        </div>
    );
});
