import HeroContainer from 'containers/HeroContainer';
import React from 'react';
import { Route } from 'react-router-dom';
import { Trends } from './Trends/Trends';

interface IHomeProps {
    moviesStore?: any;
}

const Home: React.FC<IHomeProps> = ({ moviesStore }: IHomeProps) => {
    return (
        <div>
            <>
                <HeroContainer />
            </>
            <Route path="/home/trends" component={Trends} />
        </div>
    );
};

export default Home;
