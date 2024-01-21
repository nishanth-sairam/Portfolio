import { Container} from '../hero/hero.style';
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
        time: 'March 2023 – June 2023',
        title: 'Excelacom Technologies | INTERN',
        description: `
        •	Implemented 5+ REST API projects and 3+ Spring Cloud projects with the Spring Framework that showcased my expertise in constructing scalable and efficient backend systems with modern application demands.
        
        •	Adept at both front-end and back-end technologies. Successfully executing 3+ React.js projects and undertaking 2+ full-stack projects using React.js and Spring Boot.
        
        •	Showcased my persuasive ability to craft dynamic user interfaces and deliver end-to-end solutions. 
        `,
    },
    {
        time: 'June 2023 – Present',
        title: 'Excelacom Technologies | PROGRAM ANALYST',
        description:  `•	Developed robust CRM integration frameworks in complex backend systems, driving efficient and effective solutions that facilitate seamless integration. These solutions have led to a 25% increase in productivity.
        •	Troubleshoot an average of 20+ Bug-fix Jira tickets per month in both Spring Boot and React.js environments. Quality assurance skills and dedication to maintaining refine system integrity.
        •	Designed and enhanced client-side programs using React.js, ensuring a responsive and user-friendly interface that enhances the overall user experience.
        •	Tech stack: Java, Spring, React  Database: SQL (Oracle DB)
        `,
    },
];

const Work = (props) => {
    return (
        <Container>
            <TimelineWrapper>
                {works?.map((work, id) => {
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
