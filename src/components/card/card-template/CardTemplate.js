import ExpressionCard from "../expression-card/ExpressionCard";
import ResultsCard from "../results-card/ResultsCard";
import InfoCard from "../info-card/InfoCard";

import { Container, HeaderCard, CardTitle } from "./styles";

const CardTemplate = ({ cardName, type }) => {
    return (
        <Container className={type}>
            <HeaderCard>
                <CardTitle>{cardName}</CardTitle>
            </HeaderCard>
            {type === "analyze" ? <ExpressionCard /> : null}
            {type === "result" ? <ResultsCard /> : null}
            {type === "info" ? <InfoCard /> : null}
        </Container>
    );
};

export default CardTemplate;
