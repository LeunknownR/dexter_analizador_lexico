import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container, LexicComponentContainer } from "./styles";


const LexemesList = ({description, lexeme}) => {
    return (
        <Container>
            <LexicComponentContainer>
                <CustomIcon icon="gg:components" color="var(--barely-used-gray)" size="XS"/>
                <h5>{description}</h5>
                <span>{lexeme}</span>
            </LexicComponentContainer>
        </Container>
    );
};

export default LexemesList;