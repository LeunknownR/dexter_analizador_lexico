import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`
export const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    width: 400px;
    height: 450px;
    background-color: #EDF2F4;
    box-shadow: 0 2px #000000, inset 0px 0px 10px rgba(0, 0, 0, 0.25);
`
export const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    code {
        width: 97%;
        height: 100%;
    }
`;
export const TextArea = styled.textarea`
    width: 97%;
    height: 100%;
    box-sizing: border-box;
    resize: none;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 22px;
    background-color: #EDF2F4;
    border-radius: 0 0 20px 20px;
    ::-webkit-scrollbar {
        background: null;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 20px;
    }
`;
export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 0 90px 0;
    gap: 20px;
    @media (max-width: 1699px) {
        padding: 23px 0;
    }
`;
