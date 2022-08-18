import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;   
    width: 65%; 
`;
export const Content = styled.div`
    display: flex;
    align-items: center;   
    width: 100%;
    justify-content: space-around;
    div:first-child {
    }
    div:nth-child(2) {
        text-align: center;
        width: 100%;
    }
`;