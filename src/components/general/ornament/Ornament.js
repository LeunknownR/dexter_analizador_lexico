import { Container, Dot } from "./styles";

const Ornament = ({colors}) => {
    return (
        <Container>
            {colors && colors.map(color => {
                return <Dot color={color}/>
            })}
        </Container>
    );
};

export default Ornament;