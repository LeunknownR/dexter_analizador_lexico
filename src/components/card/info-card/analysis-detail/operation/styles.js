import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    overflow: hidden;
    gap: 10px;
    div:nth-child(2) {
        text-align: center;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export const CharText = styled.span`
    font-family: "Fira Code";
`;