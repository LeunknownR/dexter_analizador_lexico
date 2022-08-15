import { Container, TextArea } from "./styles";

const ExpressionCard = () => {
    const handleKeyPress = () => {
        console.log("PRESIONADO")
    };
    return (
        <Container>
            <code>
                <TextArea
                    placeholder="Escribir aquí..."
                    spellCheck="false"
                    onKeyDown={handleKeyPress}
                />
            </code>
        </Container>
    );
};

export default ExpressionCard;
