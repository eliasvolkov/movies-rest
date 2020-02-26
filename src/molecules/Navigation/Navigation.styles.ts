import { COLORS, FONTS } from 'constants/ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    color: ${COLORS.secondText};
    font-family: ${FONTS.navLink};
    font-size: 2rem;
    text-align: center;
    position: relative;
    /* display: flex;
    flex-flow: column wrap;
    align-items: center; */
    margin-left: 7rem;
    text-decoration: none;
    transition: all 0.5s;

    &.${activeClassName} {
        color: ${COLORS.primaryText};

        &:after {
            content: '';
            display: block;
            border-radius: 5rem;
            width: 0.8rem;
            height: 0.8rem;
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            top: 150%;
            /* margin-top: 2rem; */
            background-color: ${COLORS.primaryButton};

            @media screen and (max-width: 995px) {
                margin-top: 0;
                display: none;
            }
        }
    }

    @media screen and (max-width: 995px) {
        flex-direction: row-reverse;
        align-items: center;

        margin-bottom: 5rem;
        margin-left: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 995px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        height: 100%;
    }
`;
