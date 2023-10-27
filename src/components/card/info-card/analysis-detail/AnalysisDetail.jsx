import { Container } from "./styles";

import OperationComponent from "./operation-component/OperationComponent";
import NullCard from "components/card/null-card/NullCard";

const AnalysisDetail = ({ operationsList }) => {
    return (
        <Container>
            {!operationsList ? (
                <NullCard
                icon="dashicons:table-row-delete"
                title="SIN REGISTROS"
                subtitle="Introduce una expresión y haz click para generar el registro de operaciones del análisis"
            />
            ) : (
                operationsList
                ?.map(({ reservedWordType, operations, title: { token, lexeme }},idx) => {
                        return (
                            <OperationComponent
                                reservedWordType={reservedWordType}
                                operations={operations}
                                token={token}
                                lexeme={lexeme}
                                key={idx}
                            />
                        );
                    }
                )
            )}
        </Container>
    );
};

export default AnalysisDetail;
