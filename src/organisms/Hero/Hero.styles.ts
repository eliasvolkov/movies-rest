import styled from 'styled-components';

interface IHeroWrapper {
    backgroundImage: string | null;
}
export const HeroWrapper = styled.div<IHeroWrapper>`
    position: relative;
    background: ${({ backgroundImage }) =>
        `#fff url(https://image.tmdb.org/t/p/original${backgroundImage}) no-repeat center /cover`};
    height: 100vh;

    &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.65);
    }
`;
