import { BodyAbout, Container, HeroBody, Img, Links, TextContainer } from '../hero/hero.style';
import LinkedIn from '../../assets/LinkedIn.png';
import GitHub from '../../assets/GitHub.png';
import Mail from '../../assets/Mail outline.svg';

const Contact = (props) => {
    return (
        <Container>
            <HeroBody>
                <BodyAbout>
                    <Links style={{ gap: '10px' }}>
                        <a href={'https://in.linkedin.com/in/nishanth-sairam-s'} target="_blank">
                            <Img src={LinkedIn} />
                        </a>
                        <a href={'https://github.com/nishanth-sairam'} target="_blank">
                            <Img src={GitHub} />
                        </a>
                        <a href={'mailto:nishanthsairam@gmail.com'} target="_blank">
                            <Img src={Mail} />
                        </a>
                    </Links>
                </BodyAbout>
            </HeroBody>
        </Container>
    );
};

export default Contact;
