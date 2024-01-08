import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
    height: 102px;
    justify-content: center;
    position: relative;
    width: 100%;
`;

export const NavBarContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 136px;
    height: 102px;
    padding: 0px 200px;
    position: relative;
    width: 100%;
`;

export const NavItem = styled(Link)`
    align-items: center;
    display: inline-flex;
    flex: 0 auto 0 auto;
    width: fit-content;
    gap: 10px;
    justify-content: center;
    position: relative;
`;

export const LabelContainer = styled.div`
    -webkit-text-stroke: 0.5px #00000040;
    // width: fit-content;
    color: #ffffff;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-left: -0.5px;
    margin-top: -1.5px;
    position: relative;
    text-shadow: 0px 4px 4px #00000040;
`;
export const TextWrapper = styled.div`
    &:hover {
        font-size: 20px;
    }
`;
