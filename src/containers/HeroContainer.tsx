import { Hero } from 'components/organisms/Hero/Hero';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

interface IHeroContainerProps {
    moviesStore?: any;
}

const HeroContainer: React.FC<IHeroContainerProps> = ({ moviesStore }: IHeroContainerProps) => {
    useEffect(() => {
        moviesStore.fetchHeroMovies();
        setActiveMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moviesStore]);
    const movies = toJS(moviesStore.hero.heroMovies);

    const [index, setIndex] = useState(-1);

    const setActiveMovie = () => {
        setIndex(prevIndex => {
            if (prevIndex < 2) {
                return prevIndex + 1;
            }
            return 0;
        });

        setTimeout(() => {
            setActiveMovie();
        }, 5000);
    };

    const handleClick = (index: number) => {
        setIndex(index);
    };

    return <>{movies.length && <Hero {...movies[index]} indexOfMovie={index} handleClick={handleClick} />}</>;
};

export default inject('moviesStore')(observer(HeroContainer));
