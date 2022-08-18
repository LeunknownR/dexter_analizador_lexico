import { Container } from "./styles";

import ExpressionCard from "./expression-card/ExpressionCard";
import ResultsCard from "./results-card/ResultsCard";
import InfoCard from "./info-card/InfoCard";
import { useState } from "react";

const Cards = () => {
    
    const [analyzedList, setAnalyzedList] = useState([]);

    return (
        <Container>
            <ExpressionCard setAnalyzedList={setAnalyzedList} />
            <ResultsCard componentList={analyzedList[0]} />
            <InfoCard operationsList={analyzedList[1]} />
        </Container>
    );
};

export default Cards;
