// import { Headline1 } from 'atoms/Headline1/Headline1';
// import { Navigation } from 'molecules/Navigation/Navigation';
import { Hero } from 'organisms/Hero/Hero';
import React from 'react';
import { Route } from 'react-router-dom';
import { Trends } from './Trends/Trends';

const Home: React.FC = () => {
    // const links = [
    //     { label: 'Trends', url: '/home/trends' },
    //     { label: 'Popular', url: '/home/popular' },
    //     { label: 'TV', url: '/home/tv' },
    // ];
    return (
        <div>
            {/* <Headline1>Home</Headline1> */}
            <Hero backdrop_path="/oqShe6HXsmSmpK4SDae6muJBwjT.jpg" />
            {/* <Navigation links={links} /> */}
            <Route path="/home/trends" component={Trends} />
        </div>
    );
};

export default Home;
