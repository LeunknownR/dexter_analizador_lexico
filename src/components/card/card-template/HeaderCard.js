import { Container, CardTitle } from "./styles";

const HeaderCard = ({ cardName }) => {
    return (
        <Container>
            <CardTitle>{cardName}</CardTitle>
        </Container>
    );
};

export default HeaderCard;