import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container } from "./styles";

const AnalysisTitle = ({ title, component }) => {
    return (
        <Container>
            <h3>{title}</h3>
            <CustomIcon
                icon="bxs:right-arrow"
                color="--secondary-color"
                size="S"
            />
            <span className="custom-subtitle">{component}</span>
        </Container>
    );
};

export default AnalysisTitle;
