import { Container } from "./styles";

const ResultComponent = ({ lexeme, token }) => {
    return (
        <Container>
            <div>
                <span>{lexeme}</span>
            </div>
            <div>
                <span>{token}</span>
            </div>
        </Container>
    );
};

export default ResultComponent;
