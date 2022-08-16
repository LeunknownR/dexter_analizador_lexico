import { Container } from "./styles";

import ExpressionCard from "./expression-card/ExpressionCard";
import ResultsCard from "./results-card/ResultsCard";
import InfoCard from "./info-card/InfoCard";

const Cards = () => {
    return (
        <Container>
            <ExpressionCard />
            <ResultsCard />
            <InfoCard />
        </Container>
    );
};

export default Cards;
