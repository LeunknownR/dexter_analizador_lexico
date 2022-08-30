import { useState } from "react";

import { Container, CardContainer, InfoTabs, Tab, InfoBody } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import AnalysisDetail from "./analysis-detail/AnalysisDetail";
import LexicalComponent from "./lexical-components/LexicalComponents";
import HeaderCard from "../card-template/HeaderCard";

const InfoCard = ({
    refresh,
    operationsList
}) => {
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
    const views = [
        <LexicalComponent/>,
        <AnalysisDetail operationsList={operationsList}/>
    ];
    //Acordarme de cambiar los valores de este state para cuando ya esté todo skr
    return (
        <Container className={refresh ? "refresh" : ""}>
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
                </InfoBody>
            </CardContainer>
        </Container>
    );
};

export default InfoCard;
