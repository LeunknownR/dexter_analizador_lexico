import Ornament from "components/general/ornament/Ornament";
import { Container, Content, TitleContainer } from "./styles";

const SubHeader = ({ title, subtitle, img }) => {
    return (
        <Container>
            <Content className="standard-padd-mar">
                <TitleContainer>
                    {subtitle && (
                        <h4 className="custom-subtitle">{subtitle}</h4>
                    )}
                    <h2 className="custom-title-2">{title}</h2>
                </TitleContainer>
                {img && <img src={img} alt="DexterLogo"></img>}
            </Content>
            <Ornament
                colors={[
                    "--primary-color",
                    "--secondary-color",
                    "--third-color",
                ]}
            />
        </Container>
    );
};

export default SubHeader;
