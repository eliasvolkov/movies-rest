import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { Menu2 } from 'styled-icons/remix-fill/Menu2';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding: 2rem;
    padding-bottom: 0;
    align-items: baseline;
`;
export const LogoWrapper = styled.div`
    width: 9rem;
`;
export const NavWrapper = styled.div`
    margin-left: auto;
    margin-right: 5rem;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const MenuIcon = styled(Menu2)`
    color: ${COLORS.primaryText};
    display: none;
    margin-left: auto;

    @media screen and (max-width: 800px) {
        display: block;
    }
`;
