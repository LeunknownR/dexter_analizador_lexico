import { useState } from "react";

import { Container, CardContainer, InfoTabs, Tab, InfoBody } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import AnalysisDetail from "./analysisDetail/AnalysisDetail";
import LexicalComponent from "./lexicalComponents/LexicalComponents";
import HeaderCard from "../card-template/HeaderCard";
const InfoCard = () => {
    const [tabIdx, setTabIdx] = useState(0);

    const getTabActive = (idx) => {
        const classList = [];
        tabIdx === idx && classList.push("active-tab");
        return classList.join(" ");
    };

    const getTabPropsHandler = (idx) => {
        return {
            className: getTabActive(idx),
            onClick: () => setTabIdx(idx),
        };
    };

    const views = [<AnalysisDetail />, <LexicalComponent />];

    return (
        <Container>
            <HeaderCard cardName="Más Información" />
            <CardContainer>
                <InfoTabs>
                    <Tab {...getTabPropsHandler(0)}>
                        <CustomIcon icon="ep:notebook" />
                        <h5>Componentes Léxicos</h5>
                    </Tab>
                    <Tab {...getTabPropsHandler(1)}>
                        <CustomIcon icon="ant-design:file-search-outlined" />
                        <h5>Detalle del Análisis</h5>
                    </Tab>
                </InfoTabs>
                <InfoBody>
                    {views[tabIdx] || views[0]}
                    {/* <NullCard
                    icon="dashicons:table-row-delete"
                    title="SIN REGISTROS"
                    subtitle="Introduce una expresión y haz click para generar el registro de operaciones del análisis"
                /> */}
                </InfoBody>
            </CardContainer>
        </Container>
    );
};

export default InfoCard;
