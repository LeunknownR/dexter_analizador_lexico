import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    height: 450px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 2px #000000;
    &.analyze {
        width: 400px;
        background-color: #EDF2F4;
        box-shadow: 0 2px #000000, inset 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
    &.result {
        width: 500px;
    }
    &.info {
        width: 700px;
    }
`;
export const HeaderCard = styled.header`
    display: flex;
    justify-content: center;
    border-radius: 20px 20px 0 0;
    background-color: var(--primary-color);

`;
export const CardTitle = styled.h3`
    font-size: 18px;
    color: var(--secondary-back-color);
    font-weight: 500;
    padding: 10px 0;
    margin: 0;
`;