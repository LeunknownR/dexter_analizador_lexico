import { Container, TextArea } from "./styles";

const ExpressionCard = () => {
    return (
        <Container>
            <code>
                <TextArea placeholder="Escribir aquí..." spellCheck="false"/>
            </code>
        </Container>
    );
};

export default ExpressionCard;
