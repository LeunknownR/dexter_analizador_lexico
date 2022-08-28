import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const ReservedWordIdentifier = ({
    caption
}) => {
    return (
        <Container>
            <CustomIcon
                icon="mdi:pentagram"
                color="--secondary-color"
                size="XS"
                rotate="2"
            />
            <span>{caption}</span>
        </Container>
    );
};

export default ReservedWordIdentifier;
