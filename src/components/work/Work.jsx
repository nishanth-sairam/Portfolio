import { Container, HeroBody, Img } from '../hero/hero.style';
import {
    Frame,
    ItemContainer,
    LeftSide,
    Line,
    RightSide,
    StyledAccordion,
    TextAnimate1,
    TextContainer,
    TimelineWrapper,
} from './Work.style';
import DateIcon from '../../assets/DateIcon.png';
import LineOne from '../../assets/LineThree.png';
import User from '../../assets/User.png';
import ExpandIcon from '../../assets/ExpandIcon.png';
import { useState } from 'react';

const works = [
    {
        time: 'March/2023 - June/2023',
        title: 'Excelacom Technologies',
        description: `Commodo ipsum reprehenderit do aliquip voluptate occaecat pariatur qui velit dolor ipsum velit. Sint deserunt fugiat pariatur proident sit ullamco culpa esse laborum ut est adipisicing nulla esse. Consectetur dolor aliquip elit labore culpa nisi fugiat id laborum. Minim cillum commodo cupidatat ullamco. Nisi consectetur elit do culpa.
Pariatur consequat excepteur nisi fugiat. Et elit pariatur culpa pariatur ut nulla est enim. Culpa aliqua duis dolor velit enim ullamco ipsum magna ad aute commodo tempor. Ad cupidatat ullamco Lorem id adipisicing. Consequat duis consequat cupidatat dolor nulla exercitation minim est labore cillum tempor ea velit adipisicing.`,
    },
    {
        time: 'March/2023 - June/2023',
        title: 'Excelacom Technologies',
        description: 'Non eiusmod proident aliquip velit id non.',
    },
];

const Work = (props) => {
    return (
        <Container>
            <TimelineWrapper>
                {works?.map((work,id) => {
                    const { time, title, description } = work;
                    return (
                        <ItemContainer key={id}>
                            <LeftSide>
                                <Frame>
                                    <img src={DateIcon} />
                                    <TextContainer>{time}</TextContainer>
                                </Frame>
                            </LeftSide>
                            <Line alt="Vertical line" src={LineOne} />
                            <RightSide style={{ cursor: 'pointer' }}>
                                <Accordion title={title} description={description} />
                            </RightSide>
                        </ItemContainer>
                    );
                })}
            </TimelineWrapper>
        </Container>
    );
};

export default Work;

export const Accordion = ({ title, description }) => {
    const handleClick = () => {
        setIsOn(!isOn);
    };
    const [isOn, setIsOn] = useState(false);

    return (
        <StyledAccordion className={`${isOn ? 'on' : 'off'}`} onClick={handleClick}>
            <Frame>
                <img src={User} />
                <TextContainer>{title}</TextContainer>
                <img src={ExpandIcon} />
            </Frame>
            {isOn && <TextAnimate1>{description}</TextAnimate1>}
        </StyledAccordion>
    );
};
