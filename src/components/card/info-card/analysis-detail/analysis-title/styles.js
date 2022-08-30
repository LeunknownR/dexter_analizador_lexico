import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    h3 {
        margin: 0;
        color: var(--primary-color);
        font-weight: 600;
    }
    span {
        margin: 0;
        font-weight: 300;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export const LexemeText = styled.div`
    font-family: "Fira Code";
    font-weight: bold;
    color: var(--gray);
    font-size: 18px;
`;