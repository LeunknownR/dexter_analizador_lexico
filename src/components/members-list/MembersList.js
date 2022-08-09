import { Container, CardsContainer, MemberContainer } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";

const MembersList = ({ names, isShown }) => {
    return (
        <Container className={isShown ? "active" : "inactive"}>
            <h5 className="custom-subtitle-2">MIEMBROS</h5>
            <CardsContainer>
                {names.map((name, idx) => {
                    return <MemberCard key={idx} name={name} />;
                })}
            </CardsContainer>
        </Container>
    );
};

export default MembersList;

//Subcomponent

const MemberCard = ({ name }) => {
    return (
        <MemberContainer>
            <CustomIcon
                icon="charm:person"
                color="--barely-used-gray"
                size="M"
            />
            <span>{name}</span>
        </MemberContainer>
    );
};
