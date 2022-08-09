import NullCard from "../null-card/NullCard";
import { Container } from "./styles";

const ResultsCard = () => {
    return (
        <Container>
            <NullCard
                icon="fluent:table-dismiss-24-filled"
                title="NO HAY EXPRESIÓN PARA ANALIZAR"
                subtitle="Introduce una expresión y haz click en analizar para evaluarlo"
            />
        </Container>
    );
};

export default ResultsCard;
