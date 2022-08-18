import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const AnalysisTitle = ({ token, lexeme }) => {
    return (
        <Container>
            <h3>{token.toUpperCase()}</h3>
            <CustomIcon
                icon="bxs:right-arrow"
                color="--secondary-color"
                size="S"
            />
            <span className="custom-subtitle">{lexeme}</span>
        </Container>
    );
};

export default AnalysisTitle;
