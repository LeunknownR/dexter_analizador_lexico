import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(22, 26, 29, 0.96);
    z-index: 1000;
`;
export const ModalWindow = styled.article`
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    max-width: 1152px;
    width: 60%;
    max-height: 60%;
    border-radius: 20px;
    gap: 20px;
    @media (max-width: 650px) {
        width: 90%;
    }
`;
export const ExitBtnContainer = styled.div`
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
`;
export const ModalTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 60px 0 0 75px;
`;
export const ModalHr = styled.hr`
    border: 1px solid #ececec;
    width: 90%;
`;
export const InfoError = styled.p`
    font-size: 24px;
    color: #9e9c9c;
    font-weight: 300;
    padding: 0 60px;
    margin: 0;
    @media (max-width: 750px) {
        font-size: 20px;
    }
    @media (max-height: 648.67px) {
        font-size: 17px;
    }
`;
export const ExpressionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px 0 50px 0;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
    @media (max-height: 648.67px) {
        flex-direction: row;
        padding: 10px 0 40px 0;
    }
    @media (max-width: 830px) {
        flex-direction: column;
    }
    div {
        display: flex;
        gap: 15px;
    }
    h3 {
        color: var(--secondary-color-2);
        margin: 0;
        font-size: 23px;
        @media (max-height: 648.67px) {
            font-size: 16px;
        }
    }
    span {
        color: #8c8c8c;
        font-size: 23px;
        width: 45%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        @media (max-width: 1250px) {
            width: 85%;
        }
        @media (max-height: 648.67px) {
            width: 50%;
        }
        @media (max-width: 830px) {
            width: 80%;
        }
        @media (max-height: 648.67px) {
            font-size: 16px;
        }
    }
`;
