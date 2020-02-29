// import { Headline1 } from 'atoms/Headline1/Headline1';
// import { Navigation } from 'molecules/Navigation/Navigation';
import { Hero } from 'organisms/Hero/Hero';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Trends } from './Trends/Trends';

const Home: React.FC = () => {
    // const links = [
    //     { label: 'Trends', url: '/home/trends' },
    //     { label: 'Popular', url: '/home/popular' },
    //     { label: 'TV', url: '/home/tv' },
    // ];

    const [movie, setMovie] = useState<any>();

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/365045?api_key=4019b9f9b62830654a1f1d1ba18c99fe&language=ru',
            );
            const data = await response.json();
            setMovie(data);
        };

        getMovie();
    }, [setMovie]);
    return (
        <div>
            {/* <Headline1>Home</Headline1> */}
            {/*  backdrop_path="/oqShe6HXsmSmpK4SDae6muJBwjT.jpg"  */}
            {movie && (
                <Hero
                    title={movie.title}
                    backdrop_path={movie.backdrop_path}
                    runtime={movie.runtime}
                    overview={movie.overview}
                    vote_average={movie.vote_average}
                    genres={movie.genres}
                />
            )}

            {/* <Navigation links={links} /> */}
            <Route path="/home/trends" component={Trends} />
        </div>
    );
};

export default Home;
