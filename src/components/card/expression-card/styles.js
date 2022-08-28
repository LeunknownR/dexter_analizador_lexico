import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;
export const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    height: 450px;
    background-color: #edf2f4;
`;
export const Content = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 20px 20px;
    position: relative; 
    overflow: hidden;
    code {
        height: 100%;
    }
    &::after {
        content: "";
        border-radius: 30px;
        border: 20px solid var(--secondary-color-2);
        border-bottom: 20px dashed var(--secondary-color-2);
        border-right: 20px dashed var(--secondary-color-2);
        z-index: 1;
        opacity: 0.9;
        position: absolute;
        right: -25px;
        bottom: -25px;
        pointer-events: none;
    }
`;
export const TextArea = styled.textarea`
    min-width: 400px;
    max-width: 550px;
    height: 100%;
    box-sizing: border-box;
    resize: horizontal;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 22px;
    background-color: #edf2f4;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 2px #000000, inset 0px 0px 10px rgba(0, 0, 0, 0.25);
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
