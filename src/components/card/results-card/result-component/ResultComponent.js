import { Container } from "./styles";

const ResultComponent = ({ lexeme, token }) => {
    return (
        <Container>
            <div>
                <span title={lexeme}>{lexeme}</span>
            </div>
            <div>
                <span title={token}>{token}</span>
            </div>
        </Container>
    );
};

export default ResultComponent;
