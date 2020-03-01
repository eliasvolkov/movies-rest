import { Button } from 'components/atoms/Button/Button';
import { Headline1 } from 'components/atoms/Headline1/Headline1';
import { Rating } from 'components/atoms/Rating/Rating';
import { Subtitle1 } from 'components/atoms/Subtitle1/Subtitle1';
import React from 'react';
import { Col, Container } from 'styled-bootstrap-grid';
import { Genre } from 'types/MovieDetails';
import {
    Buttons,
    Genres,
    HeroWrapper,
    Icon,
    InfoWrapper,
    P3,
    PrimaryButton,
    Rate,
    RateWrapper,
    Row,
    StyledInfo,
} from './Hero.styles';

interface IHeroProps {
    title: string;
    overview: string;
    runtime: number;
    vote_average: number;
    backdrop_path: string | null;
    genres: Genre[];
}

export const Hero: React.FC<IHeroProps> = ({ title, overview, runtime, vote_average, genres, backdrop_path }) => {
    return (
        <HeroWrapper backgroundImage={backdrop_path}>
            <Container>
                <Row>
                    <Col sm={8} md={6} smOffset={1}>
                        <InfoWrapper>
                            <P3>Duration: {runtime}</P3>
                            <RateWrapper>
                                <Rate>
                                    <Rating title={vote_average} iconSize={21} color="white" fontSize="1.8rem" />
                                </Rate>
                                {genres.map(genre => (
                                    <Genres key={genre.id}>{genre.name}</Genres>
                                ))}
                            </RateWrapper>
                            <Headline1>{title}</Headline1>
                            <Subtitle1>{overview}</Subtitle1>
                            <Buttons>
                                <PrimaryButton>
                                    <Button isPrimary label="Add list" onClick={() => {}}>
                                        <Icon />
                                    </Button>
                                </PrimaryButton>
                                <Button label="more info" onClick={() => {}}>
                                    <StyledInfo />
                                </Button>
                            </Buttons>
                        </InfoWrapper>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};
