import { COLORS, FONTS } from 'constants/ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    color: ${COLORS.secondText};
    font-family: ${FONTS.navLink};
    font-size: 2rem;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-left: 7rem;
    text-decoration: none;
    transition: all 0.5s;

    &.${activeClassName} {
        color: ${COLORS.primaryText};

        &:after {
            content: '';
            border-radius: 5rem;
            width: 0.8rem;
            height: 0.8rem;
            margin-top: 2rem;
            background-color: ${COLORS.primaryButton};
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -7rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;
