import { Container } from "./styles";

import { Icon } from "@iconify/react";

const CustomIcon = ({ icon, color, backColor, size, padding }) => {
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
            {icon && (
                <Icon
                    icon={icon}
                />
            )}
        </Container>
    );
};

export default CustomIcon;
