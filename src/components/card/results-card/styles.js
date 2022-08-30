import styled from "styled-components";
import { animationRefresh } from "../styles";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 450px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 2px #000000;
    width: 500px;
    overflow: hidden;
    &.refresh {
        animation: linear ${animationRefresh} 0.25s alternate-reverse infinite;
    }
`;

export const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px 0 30px 0;
    overflow: hidden;
    hr {
        width: 80%;
        border: 1px solid #ececec;
        margin-top: -2px;
        margin-bottom: 15px;
    }
`;
export const ResultComponents = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Fira Code";
    width: 85%;
    margin-top: 20px;
    gap: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        background: unset;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 20px;
    }
`;