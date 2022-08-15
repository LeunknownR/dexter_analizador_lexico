import { useState } from "react";

import { Container, InfoTabs, Tab, InfoBody } from "./styles";

import CustomIcon from "components/general/custom-icon/CustomIcon";
import NullCard from "../null-card/NullCard";
import AnalysisDetail from "./analysisDetail/AnalysisDetail";
import LexicalComponent from "./lexicalComponents/LexicalComponents";

const InfoCard = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (idx) => {
        setToggleState(idx);
    };

    return (
        <Container>
            <InfoTabs>
                <Tab
                    onClick={() => toggleTab(1)}
                    className={toggleState === 1 ? "active-tab" : null}
                >
                    <CustomIcon icon="ep:notebook" />
                    <h5>Componentes Léxicos</h5>
                </Tab>
                <Tab
                    onClick={() => toggleTab(2)}
                    className={toggleState === 2 ? "active-tab" : null}
                >
                    <CustomIcon icon="ant-design:file-search-outlined" />
                    <h5>Detalle del Análisis</h5>
                </Tab>
            </InfoTabs>
            <InfoBody>
                {toggleState === 1 ? <LexicalComponent/> : <AnalysisDetail/>}
                {/* <NullCard
                    icon="dashicons:table-row-delete"
                    title="SIN REGISTROS"
                    subtitle="Introduce una expresión y haz click para generar el registro de operaciones del análisis"
                /> */}
            </InfoBody>
        </Container>
    );
};

export default InfoCard;
