import { Container } from "./styles";

import { Icon } from "@iconify/react";

const CustomIcon = ({ icon, color, backColor, size, padding, rotate }) => {
    const getClassName = () => {
        const classList = [];
        classList.push(size || "icon");
        return classList.join(" ");
    };
    return (
        <Container
            className={getClassName()}
            color={color}
            backColor={backColor}
            padding={padding}
        >
            {icon && <Icon icon={icon} rotate={rotate} />}
        </Container>
    );
};

export default CustomIcon;
