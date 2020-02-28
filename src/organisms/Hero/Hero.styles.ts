import { COLORS, FONTS } from 'constants/ui';
import styled from 'styled-components';
import { Add } from 'styled-icons/remix-fill/Add';

interface IHeroWrapper {
    backgroundImage: string | null;
}
export const HeroWrapper = styled.div<IHeroWrapper>`
    position: relative;
    background: ${({ backgroundImage }) =>
        `#fff url(https://image.tmdb.org/t/p/original${backgroundImage}) no-repeat center /cover`};
    height: 100vh;
    z-index: 3;

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
`;

export const InfoWrapper = styled.div`
    margin-top: 30rem;
    /* border: 1px solid red; */
`;

export const P3 = styled.p`
    color: ${COLORS.primaryText};
    font-size: 1.3rem;
`;

export const RateWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 3rem 0;
`;

export const Genres = styled.p`
    color: #8a8a8a;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1.2rem;

    /* vertical-align: middle; */
    &:not(:last-child):after {
        content: '|';
        display: inline;
        color: #8a8a8a;
        margin-left: 1rem;
    }
`;

export const PrimaryButton = styled.button`
    margin-top: 3rem;
    background-color: ${COLORS.primaryButton};
    color: ${COLORS.primaryText};
    border: none;
    border-radius: 5rem;
    text-transform: uppercase;
    padding: 1.8rem 5rem;
    /* padding: 1.5rem 0; */
    /* min-width: 20rem; */
    font-size: 2rem;
    font-weight: bold;
    box-shadow: 0 0.4rem 2.5rem ${COLORS.primaryButton};
    outline: none;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
export const ButtonLabel = styled.p`
    font-family: ${FONTS.primaryFont};
    font-size: 2.2rem;
    font-weight: bold;
`;

export const Icon = styled(Add)`
    color: ${COLORS.primaryText};
    /* font-weight: bold; */
    font-size: 2rem;
    /* margin-left: 2rem; */
`;
