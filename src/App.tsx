import { Headline1 } from 'atoms/Headline1/Headline1';
import React from 'react';
import { Reset } from 'styled-reset';
import { GlobalStyle } from './globalStyles';

function App() {
    return (
        <>
            <Reset />
            <GlobalStyle />
            <Headline1>Welcome Back My Friend</Headline1>
        </>
    );
}

// tslint:disable-next-line: no-default-export
export default App;
