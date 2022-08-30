import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container, ReservedWordItem } from "./styles";

const ReservedWordsList = ({ word }) => {
    return (
        <Container>
            <CustomIcon
                icon="mdi:pentagram"
                color="var(--barely-used-gray-2)"
                size="S"
                rotate="2"
            />
            <h5>{word}</h5>
        </Container>
    );
};

export default ReservedWordsList;
