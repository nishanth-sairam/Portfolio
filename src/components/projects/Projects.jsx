import { Container, Img } from '../hero/hero.style';
import { Card, CardMedia, ProjectContainer, CardContentContainer, ButtonContainer } from './Projects.style';
import ImageOne from '../../assets/ImageOne.jpg';
import cloudLink from '../../assets/cloudLink.png';
import webPre1 from '../../assets/webPre1.png';
import webPre2 from '../../assets/webPre2.png';
import webPre3 from '../../assets/webPre3.png';
import git from '../../assets/git.png';
import { TextContainer } from '../work/Work.style';

const Projects = (props) => {
    const projectJson = [
        {
            img: webPre1,
            title: 'E-Commerce Web Site',
            webLink: 'https://crwnappvite.netlify.app',
            gitLink: '',
        },
        {
            img: webPre2,
            title: 'Bootstrap Web Site',
            webLink: 'https://nishanth-sairam.github.io/BootStrap-webSite',
            gitLink: 'https://github.com/nishanth-sairam/BootStrap-webSite',
        },
        {
            img: webPre3,
            title: 'React Editable Table',
            webLink: 'https://nishanth-sairam.github.io/counter-app',
            gitLink: 'https://github.com/nishanth-sairam/counter-app',
        },
    ];
    return (
        <Container>
            <ProjectContainer>
                {projectJson.map((project) => {
                    const { img, title, webLink, gitLink } = project;
                    return (
                        <Card>
                            <CardMedia src={img} />
                            <CardContentContainer>
                                <TextContainer style={{ padding: '10px', top: '0', position: 'absolute' }}>
                                    {title}
                                </TextContainer>
                                <ButtonContainer>
                                    <a href={webLink} target="_blank">
                                        <Img src={cloudLink} />
                                    </a>
                                    <a href={gitLink} target="_blank">
                                        <Img src={git} />
                                    </a>
                                </ButtonContainer>
                            </CardContentContainer>
                        </Card>
                    );
                })}
            </ProjectContainer>
        </Container>
    );
};

export default Projects;
