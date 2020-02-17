import { COLORS } from 'constants/ui';
import styled from 'styled-components';
import { Heart } from 'styled-icons/evil/Heart';

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
        transform: scale(1.1);
    }
`;

export const ImgWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
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
