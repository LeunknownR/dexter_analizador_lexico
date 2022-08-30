import CustomIcon from "components/general/custom-icon/CustomIcon";

import { Container, NewState } from "./styles";

const OperationType = ({newState}) => {
    return (
        <Container>
            <CustomIcon
                icon="bi:arrow-right"
                color="var(--secondary-back-color)"
                backColor={newState === "error" ? "var(--error-color)" : "var(--black-xd)"}
                size="XS"
            />
            <NewState color={newState === "error" ? "var(--error-color)" : "var(--black-xd)"} title={newState}>{newState}</NewState>
        </Container>
    );
};

export default OperationType;
