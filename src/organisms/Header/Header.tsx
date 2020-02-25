import { Navigation } from 'molecules/Navigation/Navigation';
import React from 'react';
import { Container } from 'styled-bootstrap-grid';
import { LogoWrapper, MenuIcon, NavWrapper, Wrapper } from './Header.styles';

interface Props {}

export const Header: React.FC<Props> = () => {
    const links = [
        { label: 'Home', url: '/', isExact: true },
        { label: 'Movies', url: '/movies' },
        { label: 'Discover', url: '/discover' },
        { label: 'Wish List', url: '/wishlist' },
        { label: 'Login', url: '/login' },
    ];

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
                </LogoWrapper>
                <NavWrapper>
                    <Navigation links={links} />
                </NavWrapper>
                <h3>icons</h3>
                <MenuIcon size={30} />
            </Wrapper>
        </Container>
    );
};
