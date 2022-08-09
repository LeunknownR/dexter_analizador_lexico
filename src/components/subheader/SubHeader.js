import { Container, TitleContainer } from "./styles";

const SubHeader = ({ title, subtitle, img }) => {
    return (
        <Container className="standard-padd-mar">
            <TitleContainer>
                {subtitle && <h4 className="custom-subtitle">{subtitle}</h4>}
                <h2 className="custom-title-2">{title}</h2>
            </TitleContainer>
            {img && <img src={img} alt="DexterLogo"></img>}
        </Container>
    );
};

export default SubHeader;
