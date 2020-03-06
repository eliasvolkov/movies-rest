import { Hero } from 'components/organisms/Hero/Hero';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { IMovieDetail } from 'types/MovieDetails';

interface IHeroContainerProps {
    moviesStore?: any;
}

const HeroContainer: React.FC<IHeroContainerProps> = ({ moviesStore }: IHeroContainerProps) => {
    useEffect(() => {
        moviesStore.fetchHeroMovies();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moviesStore]);
    const movies: IMovieDetail[] = toJS(moviesStore.hero.heroMovies);

    const [index, setIndex] = useState(0);
    const moviesId = movies.map(movie => movie.id);

    const handleClick = (index: number) => {
        setIndex(index);
    };

    return (
        <>
            {movies.length &&
                movies.map(movie => (
                    <Hero
                        {...movie}
                        indexOfMovie={index}
                        handleClick={handleClick}
                        activeMovieId={moviesId[index]}
                        key={movie.id}
                    />
                ))}
        </>
    );
};

export default inject('moviesStore')(observer(HeroContainer));
