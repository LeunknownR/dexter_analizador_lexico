import { Container } from "./styles";

const Footer = ({ team }) => {
    return (
        <Container>
            <h3 className="custom-subtitle-2">COPYRIGHT © 2022</h3>
            <h3 className="custom-subtitle-2">POWERED BY {team}</h3>
        </Container>
    );
};

export default Footer;
