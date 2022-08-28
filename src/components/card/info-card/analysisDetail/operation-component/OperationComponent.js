import { OperationContainer, RowContainer } from "./styles";

import Title from "../analysis-title/AnalysisTitle";
import Operation from "../operation/Operation";
import OperationType from "../operation-type/OperationType";
import ReservedWordIdentifier from "../reserved-word-id/ReservedWordId";
import { STATES } from "logic/lexic/constants/states";

const CAPTIONS = {
    [STATES.RESERVED_WORD]: <ReservedWordIdentifier caption="IDENTIFICADOR DENTRO DE PALABRAS RESERVADAS"/>,
    [STATES.BOOLEAN]: <ReservedWordIdentifier caption="IDENTIFICADOR DENTRO DE BOOLEANOS"/>
};

const OperationComponent = ({ token, lexeme, operations, reservedWordType }) => {
    return (
        <OperationContainer>
            <Title token={token} lexeme={lexeme} />
            {operations.map(({ state, newState, char: { group, value } }, idx) => 
                <OperationRow
                    state={state}
                    newState={newState}
                    group={group}
                    value={value}
                    key={idx}
                />
            )}
            {reservedWordType && 
            CAPTIONS[reservedWordType]}
        </OperationContainer>
    );
};

export default OperationComponent;

const OperationRow = ({ state, group, value, newState }) => {
    return (
        <RowContainer>
            <Operation state={state} charGroup={group} charValue={value} />
            <OperationType newState={newState} />
        </RowContainer>
    );
};
