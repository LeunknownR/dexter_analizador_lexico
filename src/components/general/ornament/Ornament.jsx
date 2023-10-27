import { Container, Dot } from "./styles";

const Ornament = ({colors}) => {
    return (
        <Container>
            {colors && colors.map((color, idx) => {
                return <Dot key={idx} color={color}/>
            })}
        </Container>
    );
};

export default Ornament;