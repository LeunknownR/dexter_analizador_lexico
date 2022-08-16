import {
    Container,
    ComponentWrapper,
    OperationRow
} from "./styles";

import Title from "./AnalysisTitle/AnalysisTitle";
import Operation from "./operation/Operation";
import OperationType from "./operation-type/OperationType";

const AnalysisDetail = () => {
    return (
        <Container>
            <ComponentWrapper>
                <Title title="Palabra reservada" component="if"/>
                <OperationRow>
                    <Operation/>
                    <OperationType/>
                </OperationRow>
                <OperationRow>
                    <Operation/>
                    <OperationType/>
                </OperationRow>
            </ComponentWrapper>
        </Container>
    );
};

export default AnalysisDetail;
