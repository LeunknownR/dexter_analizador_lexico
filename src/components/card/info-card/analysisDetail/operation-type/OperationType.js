import CustomIcon from "components/general/custom-icon/CustomIcon";

import { Container, NewState } from "./styles";

const OperationType = ({newState}) => {
    return (
        <Container>
            <CustomIcon
                icon="bi:arrow-right"
                color="--secondary-back-color"
                backColor={newState === "error" ? "--error-color" : "--black-xd"}
                size="S"
            />
            <NewState color={newState === "error" ? "var(--error-color)" : "var(--black-xd)"} title={newState}>{newState}</NewState>
        </Container>
    );
};

export default OperationType;
