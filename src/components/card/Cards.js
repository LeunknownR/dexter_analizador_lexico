import { Container } from "./styles";

import ExpressionCard from "./expression-card/ExpressionCard";
import ResultsCard from "./results-card/ResultsCard";
import InfoCard from "./info-card/InfoCard";
import { useState } from "react";

const Cards = () => {
    const [analyzedList, setAnalyzedList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [componentList, operationsList] = analyzedList;
    return (
        <Container>
            <ExpressionCard
                setAnalyzedList={setAnalyzedList}
                setRefresh={setRefresh}/>
            <ResultsCard refresh={refresh} componentList={componentList}/>
            <InfoCard refresh={refresh} operationsList={operationsList}/>
        </Container>
    );
};

export default Cards;