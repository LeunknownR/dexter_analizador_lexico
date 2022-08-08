import { Container } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";

const Header = ({ title, icon }) => {
    return (
        <Container>
            <h1 className="custom-title">{title}</h1>
            {icon && <CustomIcon icon={icon} backColor="--third-color"/> }
        </Container>
    );
};

export default Header;
