import CustomIcon from "components/general/custom-icon/CustomIcon";
import { 
    Container, 
    LexemeText } from "./styles";

const AnalysisTitle = ({ token, lexeme }) => {
    return (
        <Container>
            <h3>{token.toUpperCase()}</h3>
            <CustomIcon
                icon="bxs:right-arrow"
                color="var(--secondary-color)"
                size="XS"
            />
            <LexemeText title={lexeme}>{lexeme}</LexemeText>
        </Container>
    );
};

export default AnalysisTitle;
