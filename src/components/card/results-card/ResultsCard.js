import HeaderCard from "../card-template/HeaderCard";
import { Container, CardContainer, Categories, Components, Component } from "./styles";

const ResultsCard = () => {
    return (
        <Container>
            <HeaderCard cardName="Resultados" />
            <CardContainer>
                <Categories>
                    <div>
                        <h4>Lexema</h4>
                    </div>
                    <div>
                        <h4>Token</h4>
                    </div>
                </Categories>
                <Components>
                    <Component>
                        <div>
                            <span>If</span>
                        </div>
                        <div>
                            <span>Palabra reservada</span>
                        </div>
                    </Component>
                </Components>
                {/* <NullCard
                icon="fluent:table-dismiss-24-filled"
                title="NO HAY EXPRESIÓN PARA ANALIZAR"
                subtitle="Introduce una expresión y haz click en analizar para evaluarlo"
            /> */}
            </CardContainer>
        </Container>
    );
};

export default ResultsCard;
