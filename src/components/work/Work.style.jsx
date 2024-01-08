import styled, { keyframes } from 'styled-components';

export const TimelineWrapper = styled.div`
    width: 800px;
    height: 15rem;
    padding: 137px 50px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    display: inline-flex;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0 !important;
    }
`;

export const ItemContainer = styled.div`
    align-self: stretch;
    justify-content: space-between;
    align-items: flex-start;
    display: inline-flex;
    gap: 1px;
    position: relative;
`;

export const Item = styled.div`
    background: rgba(163, 103, 177, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    width: 40%;
`;
export const LeftSide = styled(Item)`
    padding: 15px 10px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Frame = styled.div`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    display: inline-flex;
`;

export const TextContainer = styled.div`
    color: black;
    font-size: 14px;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    word-wrap: break-word;
    width: fit-content;
`;

export const RightSide = styled(Item)`
    padding: 15px 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 40%;
`;

export const Line = styled.img`
    transform: rotate(90deg);
`;

const expandAnimation = keyframes`
  from {
    height: 0; 
  }
  to {
    height: 100%;
  }
`;

export const StyledAccordion = styled(Frame)`
    &.on {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
    }
`;

export const TextAnimate1 = styled(TextContainer)`
    animation: ${expandAnimation} 4s steps(1000, end);
`;
