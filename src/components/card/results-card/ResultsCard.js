import { Container, CardContainer, ResultComponents } from "./styles";

import HeaderCard from "../card-template/HeaderCard";
import ResultComponent from "./result-component/ResultComponent";
import ResultCategories from "./result-categories/ResultCategories";
import NullCard from "../null-card/NullCard";

const ResultsCard = ({ componentList }) => {
    return (
        <Container>
            <HeaderCard cardName="Resultados" />
            <CardContainer>
                {!componentList ? (
                    <NullCard
                        icon="fluent:table-dismiss-24-filled"
                        title="NO HAY EXPRESIÓN PARA ANALIZAR"
                        subtitle="Introduce una expresión y haz click en analizar para evaluarlo"
                    />
                ) : (
                    <>
                        <ResultCategories />
                        <ResultComponents>
                            {componentList?.map(({ lexeme, token }, idx) => {
                                return (
                                    <ResultComponent
                                        lexeme={lexeme}
                                        token={token.name}
                                        key={idx}
                                    />
                                );
                            })}
                        </ResultComponents>
                    </>
                )}
            </CardContainer>
        </Container>
    );
};

export default ResultsCard;
