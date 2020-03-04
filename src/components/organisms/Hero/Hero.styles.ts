import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { MoreVertical } from 'styled-icons/feather/MoreVertical';
import { Add } from 'styled-icons/remix-fill/Add';

interface IHeroWrapper {
    backgroundImage: string | null;
}
export const HeroWrapper = styled.div<IHeroWrapper>`
    display: flex;
    flex-flow: column wrap;
    position: relative;
    background: ${({ backgroundImage }) =>
        `#fff url(https://image.tmdb.org/t/p/original${backgroundImage}) no-repeat center /cover`};
    min-height: 100vh;
    padding: 30rem 0 10rem 0;
    box-sizing: border-box;
    z-index: 3;
    transition: all 1s;

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.65);
        z-index: -1;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;

    @media screen and (max-width: 500px) {
        padding: 0 1.3rem;
    }
`;

export const InfoWrapper = styled.div`
    transition: all 1s;
`;

export const P3 = styled.p`
    color: ${COLORS.primaryText};
    font-size: 1.3rem;
`;

export const RateWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    margin: 3rem 0;
`;

export const Rate = styled.div`
    margin-right: 1.5rem;
`;

export const Genres = styled.p`
    color: #8a8a8a;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1.2rem;

    &:not(:last-child):after {
        content: '|';
        display: inline;
        color: #8a8a8a;
        margin-left: 1rem;
    }

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 7rem;
    transition: all 5s;
`;

export const PrimaryButton = styled.div`
    margin-right: 3rem;
    background-color: none;
`;

export const Icon = styled(Add)`
    color: ${COLORS.primaryText};
    width: 3.5rem;
`;
export const StyledInfo = styled(MoreVertical)`
    color: ${COLORS.primaryText};
    width: 3.5rem;
`;

export const SliderDots = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

interface ISliderDot {
    isActive?: boolean;
}

export const SliderDot = styled.div<ISliderDot>`
    width: 5rem;
    height: 0.3rem;
    background-color: ${({ isActive }) => (isActive ? `${COLORS.primaryText}` : `${COLORS.darkgrey}`)};
    cursor: pointer;
    transition: all 0.5s;

    &:not(:first-child) {
        margin-left: 2rem;
    }
`;
