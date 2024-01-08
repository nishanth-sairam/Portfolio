import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    gap: 10;
    width: 100vw;
    position: fixed;
    top: 16%;
    display: inline-flex;
`;

export const HeroBody = styled.div`
    padding: 50px 50px;
    width: 100%;
    height: 15rem;
`;

export const BodyAbout = styled.div`
    flex: 1 1 0;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 38px;
    padding-bottom: 38px;
    background: rgba(163, 103, 177, 0.4);
    border-radius: 50px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10;
    display: inline-flex;
    width: 100%;
`;

export const TextContainer = styled.div`
    align-self: stretch;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    font-size: 50px;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    word-wrap: break-word;
    &:last-child {
        color: rgba(0, 0, 0, 0.6);
        font-size: 83px;
        font-family: 'Merriweather-Bold', Helvetica;
        word-wrap: break-word;
    }
`;

export const TextAnimate = styled.div`
    animation: typing 2s steps(1000, end);
    @keyframes typing {
        from {
            width: 40%;
            opacity: 0;
        }
        to {
            width: 100%;
        }
    }
`;

export const Links = styled.div`
    width: fit-content;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 33;
    display: inline-flex;
`;

export const Img = styled.img`
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 25px;
    width: 60px;
    &:hover {
        backdrop-filter: blur(0px);
        cursor: pointer;
    }
`;
