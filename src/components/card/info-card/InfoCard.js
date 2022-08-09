import { Container, InfoTabs, Tab, InfoBody } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import NullCard from "../null-card/NullCard";

const InfoCard = () => {
    return (
        <Container>
            <InfoTabs>
                <Tab>
                    <CustomIcon icon="ep:notebook" />
                    <h5>Componentes Léxicos</h5>
                </Tab>
                <Tab>
                    <CustomIcon icon="ant-design:file-search-outlined" />
                    <h5>Detalle del Análisis</h5>
                </Tab>
            </InfoTabs>
            <InfoBody>
                <NullCard
                    icon="dashicons:table-row-delete"
                    title="SIN REGISTROS"
                    subtitle="Introduce una expresión y haz click para generar el registro de operaciones del análisis"
                />
            </InfoBody>
        </Container>
    );
};

export default InfoCard;
