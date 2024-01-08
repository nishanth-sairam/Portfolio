import React from "react";
import {
    HeaderContainer,
    LabelContainer,
    NavBarContainer,
    NavItem,
    TextWrapper,
} from "./Header.style";

import GroupSvg from "../../assets/Group.svg";

const Header = () => {
    return (
        <HeaderContainer>
            <NavBarContainer>
                <NavItem to="/">
                    <Label description={`About`} />
                </NavItem>
                <NavItem to="/work">
                    <Label description={`Work Experience`} />
                </NavItem>
                <NavItem to="/">
                    <img src={GroupSvg} />
                </NavItem>
                <NavItem to="/project">
                    <Label description={`Projects`} />
                </NavItem>
                <NavItem to="/contact">
                    <Label description={`Contact`} />
                </NavItem>
            </NavBarContainer>
        </HeaderContainer>
    );
};

export const Label = (props) => {
    const { description } = props;
    return (
        <LabelContainer>
            <TextWrapper>{description}</TextWrapper>
        </LabelContainer>
    );
};

export default Header;
