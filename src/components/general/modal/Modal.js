import { useEffect } from "react";
import ReactDOM from "react-dom";

import CustomIcon from "../custom-icon/CustomIcon";

import {
    Container,
    ModalWindow,
    ModalTitle,
    ModalHr,
    InfoError,
    ExpressionContainer,
    ExitBtnContainer,
} from "./styles";

const Modal = ({ isOpen, handleOpen, errorExpression }) => {
    useEffect(() => {
        if (!isOpen) return;
        document.body.classList.add("no-scroll");
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);
    return ReactDOM.createPortal(
        <>
            {isOpen && (
                <Container onClick={() => handleOpen(false)}>
                    <ModalWindow onClick={(e) => e.stopPropagation()}>
                        <ExitBtnContainer onClick={() => handleOpen(false)}>
                            <CustomIcon
                                icon="eva:close-outline"
                                color="--error-color-2"
                                size="L"
                            />
                        </ExitBtnContainer>
                        <ModalTitle>
                            <CustomIcon
                                icon="el:error"
                                color="--error-color"
                                size="M"
                                padding="0"
                            />
                            <h2 className="custom-error-title">ERROR LÉXICO</h2>
                        </ModalTitle>
                        <ModalHr />
                        <InfoError>
                            La expresión que se ha ingresado no contiene los
                            componentes léxicos definidos por el sistema. Para
                            mayor información, ir a la pestaña de “Componentes
                            Léxicos”.
                        </InfoError>
                        <ExpressionContainer>
                            <div>
                                <CustomIcon
                                    icon="el:error"
                                    color="--secondary-color-2"
                                    size="S"
                                    padding="0"
                                />
                                <h3>Expresión desconocida:</h3>
                            </div>
                            <span>{errorExpression}</span>
                        </ExpressionContainer>
                    </ModalWindow>
                </Container>
            )}
        </>,
        document.getElementById("modal")
    );
};

export default Modal;