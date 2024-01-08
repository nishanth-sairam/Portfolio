import styled from "styled-components";
import deskBg from "./assets/deskBg.jpg";

export const DesktopContainer = styled.div`
    align-items: center;
    background-image: url(${deskBg});
    background-position: 50% 50%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    width: 100vw;
`;
