import NullCard from "../null-card/NullCard";
import { Container, Categories, Components, Component } from "./styles";

const ResultsCard = () => {
    return (
        <Container>
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
                <Component>
                    <div>
                        <span>(</span>
                    </div>
                    <div>
                        <span>Paréntesis de apertura</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>var</span>
                    </div>
                    <div>
                        <span>Identificador</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>==</span>
                    </div>
                    <div>
                        <span>Símbolo igual</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>69</span>
                    </div>
                    <div>
                        <span>Entero</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>69</span>
                    </div>
                    <div>
                        <span>Entero</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>69</span>
                    </div>
                    <div>
                        <span>Entero</span>
                    </div>
                </Component>
                <Component>
                    <div>
                        <span>69</span>
                    </div>
                    <div>
                        <span>Entero</span>
                    </div>
                </Component>
            </Components>
            {/* <NullCard
                icon="fluent:table-dismiss-24-filled"
                title="NO HAY EXPRESIÓN PARA ANALIZAR"
                subtitle="Introduce una expresión y haz click en analizar para evaluarlo"
            /> */}
        </Container>
    );
};

export default ResultsCard;
