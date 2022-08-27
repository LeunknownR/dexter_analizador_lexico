import { useState } from "react";

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
import Modal from "components/general/modal/Modal";

const ExpressionCard = ({ 
    setAnalyzedList,
    setRefresh
}) => {
    const [expression, setExpression] = useState({
        value: "",
        error: "",
    });
    const [isOpenModal, openModal] = useState(false);
    const changeExpression = ({ target: { value } }) => {
        setExpression({
            ...expression,
            value,
        });
    };
    const analyze = () => {
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
            try {
                setAnalyzedList(lexicAnalyzer(expression.value));
            } catch ({ message: error }) {
                setExpression({
                    ...expression,
                    error
                });
                openModal(prev => !prev);
            }
        }, 380);
    };

    const clean = () => {
        setExpression({
            value: "",
        });
        setAnalyzedList([]);
    };
    return (
        <>
            <Container>
                <CardContainer>
                    <HeaderCard cardName="Expresión a analizar" />
                    <Content>
                        <code>
                            <TextArea
                                placeholder="Escribir aquí..."
                                spellCheck="false"
                                onChange={changeExpression}
                                value={expression.value}
                                maxLength="10000"
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
                        disable={!expression.value}
                    />
                    <CustomBtn
                        title="Analizar"
                        icon="arcticons:audio-spectrum-analyzer"
                        color="--secondary-color"
                        backColor="--secondary-back-color"
                        onClick={analyze}
                        outline="--secondary-color"
                        disable={!expression.value}
                    />
                </BtnContainer>
            </Container>
            <Modal
                isOpen={isOpenModal}
                handleOpen={openModal}
                errorExpression={expression.error}
            />
        </>
    );
};

export default ExpressionCard;
