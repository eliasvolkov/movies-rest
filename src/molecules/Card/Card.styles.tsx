import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { Heart } from 'styled-icons/evil/Heart';

export const ImgWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 5;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 1rem;
        border: none;
        opacity: 0;
        transition: all 0.3s;
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    transition: all 0.3s;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 2rem; */
`;
export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
export const P = styled.p`
    margin-left: 2rem;
`;

export const IconHeart = styled(Heart)`
    color: ${COLORS.darkgrey};
    color: red;
`;

export const MovieInfo = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 0;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.4);

    color: red;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    padding: 1rem;
    margin-bottom: 3rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        /* transform: scale(1.1); */
        ${MovieInfo} {
            opacity: 1;
        }

        ${Img} {
            filter: blur(0.5rem);

            /* transform: scale(1.1, 1.1); */
        }
        ${ImgWrapper} {
            /* opacity: 1;
            filter: blur(0.5rem); */
            /* transform: scale(1.1, 1.1); */
        }
    }
`;
