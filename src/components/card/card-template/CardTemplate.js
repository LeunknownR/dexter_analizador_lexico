import { Container, HeaderCard, CardTitle } from "./styles";

const CardTemplate = ({ cardName, children, type }) => {
    return (
        <Container className={type}>
            <HeaderCard>
                <CardTitle>{cardName}</CardTitle>
            </HeaderCard>
            {children}
        </Container>
    );
};

export default CardTemplate;
