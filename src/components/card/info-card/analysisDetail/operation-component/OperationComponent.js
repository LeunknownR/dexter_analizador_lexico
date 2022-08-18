import { OperationContainer, RowContainer } from "./styles";

import Title from "../analysis-title/AnalysisTitle";
import Operation from "../operation/Operation";
import OperationType from "../operation-type/OperationType";
import ReservedWordIdentifier from "../reserved-word-id/ReservedWordId";

const OperationComponent = ({ token, lexeme, operations, isReservedWord }) => {
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
            { isReservedWord && <ReservedWordIdentifier/>}
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
