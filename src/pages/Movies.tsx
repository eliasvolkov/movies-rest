import { Button } from 'Button';
import { Card } from 'molecules/Card/Card';
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/Movies';
import { Col, Container, Row } from 'styled-bootstrap-grid';

export const Movies: React.FC = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await getPopularMovies();
            setMovies(response.results);
        };
        getMovies();
    }, []);
    return (
        <>
            <Row>
                {movies &&
                    movies.map(movie => (
                        <Col xs={7} sm={5} md={3} lg={2}>
                            <Card {...movie} />
                        </Col>
                    ))}
            </Row>
            <Button handleClick={() => {}} />
        </>
    );
};
