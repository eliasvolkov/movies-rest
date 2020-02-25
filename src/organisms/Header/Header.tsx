/* eslint-disable react-hooks/exhaustive-deps */
import { LINKS } from 'constants/header';
import { Navigation } from 'molecules/Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import { CloseIcon, LogoWrapper, MenuIcon, NavWrapper, Wrapper } from './Header.styles';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const { pathname } = history.location;

    const handleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
    }, [pathname]);

    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
                </LogoWrapper>
                <MenuIcon size={30} onClick={handleDrawer} />
                <NavWrapper isOpen={isOpen}>
                    <Navigation links={LINKS} />
                    <CloseIcon size={30} onClick={handleDrawer} />
                </NavWrapper>
            </Wrapper>
        </Container>
    );
};
