import CustomIcon from "../custom-icon/CustomIcon";
import { Container } from "./styles";

const CustomBtn = ({ onClick, title, icon, color, backColor, disable }) => {
    return (
        <Container onClick={onClick} color={color} backColor={backColor} disabled={disable}>
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
