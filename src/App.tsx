import { Header } from 'organisms/Header/Header';
import Home from 'pages/Home/Home';
import { Movies } from 'pages/Movies';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { Reset } from 'styled-reset';
import { GlobalStyle } from './globalStyles';

const gridTheme = {
    breakpoints: {
        // defaults below
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 575,
        // or you can use aliases
        // giant: 1200,
        // desktop: 992,
        // tablet: 768,
        // phone: 576,
        // smaller: 575,
    },
    row: {
        padding: 10, // default 15
        margin: 0,
    },
    col: {
        padding: 5, // default 15
    },
    container: {
        padding: 0, // default 15
        maxWidth: {
            // defaults below
            xl: 1740,
            lg: 960,
            md: 720,
            sm: 540,
            xs: 540,
            // or you can use aliases
            // giant: 1140,
            // desktop: 960,
            // tablet: 720,
            // phone: 540,
            // smaller: 540,
        },
    },
};

function App() {
    return (
        <GridThemeProvider gridTheme={gridTheme}>
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
        </GridThemeProvider>
    );
}

// tslint:disable-next-line: no-default-export
export default App;
