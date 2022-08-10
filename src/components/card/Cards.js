import { Container, BtnContainer } from "./styles";

import Card from "./card-template/CardTemplate";
import CustomBtn from "components/general/custom-btn/CustomBtn";
import ExpressionCard from "./expression-card/ExpressionCard";
import ResultsCard from "./results-card/ResultsCard";
import InfoCard from "./info-card/InfoCard";

const Cards = () => {
    return (
        <Container>
            <article>
                <Card cardName="Expresión a analizar" type="analyze">
                    <ExpressionCard />
                </Card>
                <BtnContainer>
                    <CustomBtn
                        title="Limpiar"
                        icon="heroicons-solid:trash"
                        color="--third-color"
                        backColor="--black-xd"
                    />
                    <CustomBtn
                        title="Analizar"
                        icon="arcticons:audio-spectrum-analyzer"
                        color="--secondary-color"
                        backColor="--secondary-back-color"
                    />
                </BtnContainer>
            </article>
            <Card cardName="Resultados" type="result">
                <ResultsCard />
            </Card>
            <Card cardName="Más información" type="info">
                <InfoCard />
            </Card>
        </Container>
    );
};

export default Cards;
