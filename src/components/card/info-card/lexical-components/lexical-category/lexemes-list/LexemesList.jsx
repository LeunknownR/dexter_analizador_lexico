import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const LexemesListItem = ({ description, lexeme }) => {
    return (
        <Container>
            <CustomIcon 
                icon="gg:components" 
                color="var(--barely-used-gray)" 
                size="XS" />
            <h5>{description}</h5>
            <span title={lexeme}>{lexeme}</span>
        </Container>
    );
};

export default LexemesListItem;