import styled from "styled-components";

export const Container = styled.div`
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
`;