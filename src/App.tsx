import { Card } from 'molecules/Card/Card';
import { Header } from 'organisms/Header/Header';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getPopularMovies } from 'services/Movies';
import { Col, Container, GridThemeProvider, Row } from 'styled-bootstrap-grid';
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
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await getPopularMovies();
            setMovies(response.results);
        };
        getMovies();
    }, []);
    return (
        <GridThemeProvider gridTheme={gridTheme}>
            <Router>
                <Reset />
                <GlobalStyle />
                <Header />
                <Container>
                    <Row>
                        {movies &&
                            movies.map(movie => (
                                <Col xs={3} sm={3} md={2} lg={1}>
                                    <Card {...movie} />
                                </Col>
                            ))}
                    </Row>
                </Container>
            </Router>
        </GridThemeProvider>
    );
}

// tslint:disable-next-line: no-default-export
export default App;
