import { Container, CardsContainer, MemberContainer } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";

const MembersList = ({ names, isShown }) => {
    const getClassName = () => {
        const classList = [];
        isShown && classList.push("active");
        return classList.join(" ");
    }
    const className = getClassName();
    return (
        <Container className={className}>
            <h5 className="custom-subtitle-2">MIEMBROS</h5>
            <CardsContainer>
                {names.map((name, idx) => {
                    return <MemberCard 
                        key={idx} 
                        name={name}
                        delayFactor={idx}
                        className={className}/>;
                })}
            </CardsContainer>
        </Container>
    );
};

export default MembersList;

//Subcomponent

const MemberCard = ({ 
    className, name, 
    delayFactor 
}) => {
    return (
        <MemberContainer className={className} delayFactor={delayFactor}>
            <CustomIcon
                icon="charm:person"
                color="--barely-used-gray"
                size="M"/>
            <span>{name}</span>
        </MemberContainer>
    );
};
