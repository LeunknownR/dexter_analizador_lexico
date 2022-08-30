import { useState } from "react";

import { Container } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import MembersList from "components/members-list/MembersList";

const membersNames = [
    "Rivera Becerra, Manuel Alejandro",
    "Ccaico Gonzales, Joseph Joel",
    "Carrasco Stein, Ralf Carsten",
    "Soto Ccaccachahua, Juan Maycol",
    "Dulanto Arias, Alexis Valentín",
    "Almeyda Mateo, Gianella Thalía"
];

const Header = ({ title, icon }) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <Container className="standard-padd-mar">
            <h1 className="custom-title">{title}</h1>
            {icon && (
                <span
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <CustomIcon icon={icon} backColor="var(--third-color)" />
                </span>
            )}
            {/* {isShown && <MembersList names={membersNames} isShown={isShown} />} */}
            <MembersList names={membersNames} isShown={isShown}/>
        </Container>
    );
};

export default Header;
