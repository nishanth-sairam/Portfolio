import { Container, Img } from '../hero/hero.style';
import { Card, CardMedia, ProjectContainer, CardContentContainer, ButtonContainer } from './Projects.style';
import ImageOne from '../../assets/ImageOne.jpg';
import cloudLink from '../../assets/cloudLink.png';
import webPre1 from '../../assets/webPre1.png';
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
            img: ImageOne,
            title: 'Tempor sit cillum cupidatat enim incididunt .',
            webLink: 'https://crwnappvite.netlify.app',
            gitLink: '',
        },
        {
            img: ImageOne,
            title: 'Exercitation pariatur sit ex dolore labore consectetur commodo amet ipsum laboris.',
            webLink: 'https://crwnappvite.netlify.app',
            gitLink: '',
        },
        {
            img: ImageOne,
            title: 'Dolore dolore exercitation minim magna voluptate et officia.',
            webLink: 'https://crwnappvite.netlify.app',
            gitLink: '',
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
