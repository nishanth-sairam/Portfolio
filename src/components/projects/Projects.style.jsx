import styled from 'styled-components';
import { Img } from '../hero/hero.style';

export const ProjectContainer = styled.div`
    width: 100%;
    height: 25rem;
    padding: 60px 205px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    align-content: space-between;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0 !important;
    }
`;

export const Card = styled.div`
    width: 25%;
    height: 15rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    background: rgba(163, 103, 177, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    padding: 10px;
`;

export const CardMedia = styled(Img)`
    width: 100%;
    height: 50%;
    position: relative;
    border-radius: 20px;
    align-items: flex-start;
`;

export const CardContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    position: relative;
`;

export const ButtonContainer = styled.div`
    display: flex;
    height: 45px;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    // align-self: down;
`;
