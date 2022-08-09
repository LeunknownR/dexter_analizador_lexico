import CustomIcon from "../custom-icon/CustomIcon";
import { Container } from "./styles";

const CustomBtn = ({ title, icon, color, backColor }) => {
    return (
        <Container color={color} backColor={backColor} disabled={true}>
            <CustomIcon
                icon={icon}
                color={color}
                backColor={backColor}
                size="S"
            />
            {title}
        </Container>
    );
};

export default CustomBtn;
