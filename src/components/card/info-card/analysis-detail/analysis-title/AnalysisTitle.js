import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const AnalysisTitle = ({ token, lexeme }) => {
    return (
        <Container>
            <h3>{token.toUpperCase()}</h3>
            <CustomIcon
                icon="bxs:right-arrow"
                color="var(--secondary-color)"
                size="XS"
            />
            <span className="custom-subtitle" title={lexeme}>{lexeme}</span>
        </Container>
    );
};

export default AnalysisTitle;
