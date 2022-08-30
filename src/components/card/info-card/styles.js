import styled from "styled-components";
import { animationRefresh } from "../styles";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 450px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 2px #000000;
    width: 700px;
    &.refresh {
        animation: linear ${animationRefresh} 0.3s alternate-reverse infinite;
    }
`
export const CardContainer = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 0 35px 25px 35px;
    overflow: hidden;
`;
export const InfoTabs = styled.header`
    display: flex;
    background-color: var(--secondary-color);
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 10px 10px 0 10px;
    gap: 10px;
    margin-top: 10px;
`;
export const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    background-color: #b8b9fe;
    padding: 0 5px;
    width: 23%;
    user-select: none;
    cursor: pointer;
    h5 {
        font-size: 14px;
        margin: 0;
        padding: 0;
        color: #9478a6;
        transition: 0.4s;
    }
    .icon {
        color: #9478a6;
        transition: 0.4s;
    }
    :hover {
        h5 {
            color: var(--black-xd);
        }
        .icon {
            color: var(--black-xd);
        }
    }
    &.active-tab {
        background-color: var(--secondary-back-color);
        h5 {
            color: #a4a4a4;
        }
        .icon {
            color: #a4a4a4;
        }
    }

    @media (max-width: 680px) {
        width: 30%;
    }
    @media (max-width: 570px) {
        width: 35%;
    }
    @media (max-width: 480px) {
        width: 45%;
    }
`;
export const InfoBody = styled.article`
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    max-height: 305px;
`;