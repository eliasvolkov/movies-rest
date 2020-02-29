import { Button } from 'Button';
import { Row } from 'globalStyles';
import { Card } from 'molecules/Card/Card';
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/Movies';
import { Col } from 'styled-bootstrap-grid';

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
                        <Col xs={5} sm={5} md={3} lg={2}>
                            <Card {...movie} />
                        </Col>
                    ))}
            </Row>
            <Button handleClick={() => {}} />
        </>
    );
};