import { Container } from "./styles";

import { Icon } from "@iconify/react";

const CustomIcon = ({ icon, color, backColor, size }) => {
    return (
        <Container color={color} backColor={backColor}>
            {icon && (
                <Icon
                    id={size ? `${size}` : "icon"}
                    icon={icon}
                />
            )}
        </Container>
    );
};

export default CustomIcon;
