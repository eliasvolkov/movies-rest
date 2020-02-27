import React from 'react';
import { HeroWrapper } from './Hero.styles';

interface IHeroProps {
    backdrop_path: string | null;
}

export const Hero: React.FC<IHeroProps> = ({ backdrop_path }) => {
    return (
        <HeroWrapper backgroundImage={backdrop_path}>
            <h3>lll</h3>
        </HeroWrapper>
    );
};
