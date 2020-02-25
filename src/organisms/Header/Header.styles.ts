import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { Close } from 'styled-icons/remix-fill/Close';
import { Menu2 } from 'styled-icons/remix-fill/Menu2';

interface INavWrapper {
    isOpen: boolean;
}

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

export const NavWrapper = styled.div<INavWrapper>`
    margin-left: auto;
    margin-right: 5rem;

    @media screen and (max-width: 995px) {
        transition: all 0.5s;
        width: 50%;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        margin-right: ${({ isOpen }) => (isOpen ? '0' : '-50%')};
        background-color: ${COLORS.background};
    }
`;

export const MenuIcon = styled(Menu2)`
    color: ${COLORS.primaryText};
    display: none;
    margin-left: auto;
    cursor: pointer;

    @media screen and (max-width: 995px) {
        display: block;
    }
`;

export const CloseIcon = styled(Close)`
    position: absolute;
    top: 0;
    right: 0;
    color: ${COLORS.primaryText};
    display: none;
    cursor: pointer;

    @media screen and (max-width: 995px) {
        display: block;
    }
`;
