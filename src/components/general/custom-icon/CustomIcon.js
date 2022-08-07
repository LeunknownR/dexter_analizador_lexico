import { Container } from "./styles";

import { Icon } from "@iconify/react";

const CustomIcon = ({ icon }) => {
    return (
        <Container>
            {icon && <Icon icon={icon} id="icon" />}
        </Container>
    );
};

export default CustomIcon;