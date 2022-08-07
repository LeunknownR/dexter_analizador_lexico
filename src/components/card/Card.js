import { Container, HeaderCard, CardTitle } from "./styles";

const Card = ({cardName, type}) => {
    return (
        <Container className={type}>
            <HeaderCard>
                <CardTitle>{cardName}</CardTitle>
            </HeaderCard>
        </Container>
    );
};

export default Card;
