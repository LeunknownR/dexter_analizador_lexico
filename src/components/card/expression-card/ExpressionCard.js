import { useEffect, useState } from "react";

import lexicAnalyzer from "logic/lexic/lexicAnalyzer";

import {
    Container,
    CardContainer,
    TextArea,
    BtnContainer,
    Content,
} from "./styles";

import CustomBtn from "components/general/custom-btn/CustomBtn";
import HeaderCard from "../card-template/HeaderCard";

const ExpressionCard = ({ setAnalyzedList }) => {
    const [expression, setExpression] = useState("");

    // useEffect(() => {
    //     console.log(expression);
    // }, [expression]);

    const changeExpression = ({ target: { value } }) => {
        setExpression(value);
    };

    const analyze = () => {
        setAnalyzedList(lexicAnalyzer(expression))
    };

    const clean = () => {
        setExpression("");
        setAnalyzedList([]);
    };
    return (
        <Container>
            <CardContainer>
                <HeaderCard cardName="Expresión a analizar" />
                <Content>
                    <code>
                        <TextArea
                            placeholder="Escribir aquí..."
                            spellCheck="false"
                            onChange={changeExpression}
                            value={expression}
                        />
                    </code>
                </Content>
            </CardContainer>
            <BtnContainer>
                <CustomBtn
                    title="Limpiar"
                    icon="heroicons-solid:trash"
                    color="--third-color"
                    backColor="--black-xd"
                    onClick={clean}
                    disable={!expression}
                />
                <CustomBtn
                    title="Analizar"
                    icon="arcticons:audio-spectrum-analyzer"
                    color="--secondary-color"
                    backColor="--secondary-back-color"
                    onClick={analyze}
                    outline="--secondary-color"
                    disable={!expression}
                />
            </BtnContainer>
        </Container>
    );
};

export default ExpressionCard;
