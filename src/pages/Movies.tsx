import { Headline1 } from 'atoms/Headline1/Headline1';
import { Button } from 'Button';
import { Row } from 'globalStyles';
import { inject, observer } from 'mobx-react';
import { Card } from 'molecules/Card/Card';
import React, { useEffect } from 'react';
import { Col } from 'styled-bootstrap-grid';

interface IMoviesProps {
    moviesStore?: any;
}

const Movies: React.FC<IMoviesProps> = ({ moviesStore }: IMoviesProps) => {
    const { newMovies, state, fetchNewMovies } = moviesStore;

    useEffect(() => {
        fetchNewMovies();
    }, [fetchNewMovies]);

    if (state === 'pending') {
        return <Headline1>Loading</Headline1>;
    }
    return (
        <>
            <Row>
                {newMovies.map((movie: any) => (
                    <Col xs={5} sm={5} md={3} lg={2} key={movie.id}>
                        <Card {...movie} />
                    </Col>
                ))}
            </Row>
            <Button handleClick={() => {}} />
        </>
    );
};

// tslint:disable-next-line: no-default-export
export default inject('moviesStore')(observer(Movies));
