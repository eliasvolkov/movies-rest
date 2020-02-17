import { Headline2 } from 'atoms/Headline2/Headline2';
import { Rating } from 'atoms/Rating/Rating';
import { Subtitle2 } from 'atoms/Subtitle2/Subtitle2';
import React from 'react';
import { BottomWrapper, IconsWrapper, Img, ImgWrapper, Wrapper } from './Card.styles';

interface ICardPros {
    title: string;
    img: string;
    rating: number;
}

export const Card: React.FC<ICardPros> = ({ title, img, rating }) => {
    return (
        <Wrapper>
            <ImgWrapper>
                <Img src={`https://image.tmdb.org/t/p/w780/${img}`} alt={title} />
            </ImgWrapper>
            <Headline2> {title}</Headline2>
            <BottomWrapper>
                <Subtitle2>2019</Subtitle2>
                <IconsWrapper>
                    <Rating title={rating} />
                </IconsWrapper>
            </BottomWrapper>
        </Wrapper>
    );
};
