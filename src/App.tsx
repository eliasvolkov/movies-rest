import { Header } from 'components/organisms/Header/Header';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { Reset } from 'styled-reset';
import { GlobalStyle, gridTheme } from './globalStyles';

function App() {
    return (
        <GridThemeProvider gridTheme={gridTheme}>
            <>
                <Router>
                    <Reset />
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/movies" component={Movies} />
                        <Redirect exact from="/" to="/home/trends" />
                    </Switch>
                </Router>
            </>
        </GridThemeProvider>
    );
}

// tslint:disable-next-line: no-default-export
export default App;
