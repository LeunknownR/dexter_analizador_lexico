import { useState } from "react";

import { Container } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import MembersList from "components/members-list/MembersList";

const membersNames = [
    "Ccaico Gonzales Joseph Joel",
    "Rivera Becerra Manuel Alejandro",
    "Carrasco Stein Ralf Carsten",
    "Soto Ccachahua Juan Maycol",
    "Dulanto Arias Alexis Valentín",
    "Almeyda Mateo Gianella Thalía"
];

const Header = ({ title, icon }) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <Container>
            <h1 className="custom-title">{title}</h1>
            {icon && (
                <span
                    onMouseOver={() => setIsShown(true)}
                    onMouseOut={() => setIsShown(false)}
                >
                    <CustomIcon icon={icon} backColor="--third-color" />
                </span>
            )}
            {/* {isShown && <MembersList names={membersNames} isShown={isShown} />} */}
            <MembersList names={membersNames} isShown={isShown} />
        </Container>
    );
};

export default Header;
