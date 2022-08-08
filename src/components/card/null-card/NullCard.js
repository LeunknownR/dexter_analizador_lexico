import CustomIcon from "components/general/custom-icon/CustomIcon";
import { Container, TextContainer } from "./styles";

const NullCard = ({icon, title, subtitle}) => {
    return (
        <Container>
            <CustomIcon
                icon={icon}
                color="--secondary-color"
                backColor="--secondary-back-color"
                size="XL"
            />
            <hr />
            <TextContainer>
                <h4 className="custom-title-3">
                    {title}
                </h4>
                <h5 className="custom-subtitle-3">
                    {subtitle}
                </h5>
            </TextContainer>
        </Container>
    );
};

export default NullCard;
