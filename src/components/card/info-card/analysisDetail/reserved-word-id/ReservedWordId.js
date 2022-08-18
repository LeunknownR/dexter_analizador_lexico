import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const ReservedWordIdentifier = () => {
    return (
        <Container>
            <CustomIcon
                icon="mdi:pentagram"
                color="--secondary-color"
                size="S"
                rotate="2"
            />
            <span>IDENTIFICADOR DENTRO DE PALABRAS RESERVADAS</span>
        </Container>
    );
};

export default ReservedWordIdentifier;
