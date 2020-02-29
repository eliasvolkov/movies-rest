import { Button } from 'atoms/Button/Button';
import { Headline1 } from 'atoms/Headline1/Headline1';
import { Rating } from 'atoms/Rating/Rating';
import { Subtitle1 } from 'atoms/Subtitle1/Subtitle1';
import React from 'react';
import { Col, Container } from 'styled-bootstrap-grid';
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
} from './Hero.styles';

interface IHeroProps {
    backdrop_path: string | null;
}

export const Hero: React.FC<IHeroProps> = ({ backdrop_path }) => {
    return (
        <HeroWrapper backgroundImage={backdrop_path}>
            <Container>
                <Row>
                    <Col md={6} lgOffset={1}>
                        <InfoWrapper>
                            <P3>Duration: 1h 28m</P3>
                            <RateWrapper>
                                <Rate>
                                    <Rating title={6.5} iconSize={21} color="white" fontSize="1.8rem" />
                                </Rate>
                                <Genres>Action</Genres>
                                <Genres>Adventure</Genres>
                                <Genres>Sci-Fi</Genres>
                                <Genres>Horror</Genres>
                            </RateWrapper>
                            <Headline1>Rampage</Headline1>
                            <Subtitle1>
                                "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells
                                the story of the world’s speediest hedgehog as he embraces his new home on Earth. In
                                this live-action adventure comedy, Sonic and his new best friend team up to defend the
                                planet from the evil genius Dr. Robotnik and his plans for world domination."
                            </Subtitle1>
                            <Buttons>
                                <PrimaryButton>
                                    <Button isPrimary label="Add list">
                                        <Icon size={33} />
                                    </Button>
                                </PrimaryButton>
                                <Button label="list">
                                    <Icon size={33} />
                                </Button>
                            </Buttons>
                        </InfoWrapper>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    );
};
