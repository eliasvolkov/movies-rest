import { Headline2 } from 'components/atoms/Headline2/Headline2';
import { Rating } from 'components/atoms/Rating/Rating';
import { Subtitle2 } from 'components/atoms/Subtitle2/Subtitle2';
import React from 'react';
import { BottomWrapper, IconsWrapper, Img, ImgWrapper, MovieInfo, Wrapper } from './Card.styles';

interface ICardPros {
    title: string;
    poster_path: string;
    vote_average: number;
}

export const Card: React.FC<ICardPros> = ({ title, poster_path, vote_average }) => {
    return (
        <Wrapper>
            <ImgWrapper>
                <Img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={title} />
            </ImgWrapper>
            <Headline2> {title}</Headline2>
            <BottomWrapper>
                <Subtitle2>2019</Subtitle2>
                <IconsWrapper>
                    <Rating title={vote_average} />
                </IconsWrapper>
            </BottomWrapper>
            <MovieInfo>lll</MovieInfo>
        </Wrapper>
    );
};
