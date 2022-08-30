import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    h5 {
        color: #6A6A6A;
        font-size: 17px;
        font-weight: 300;
        margin: 0;
    }
    span {
        color: var(--secondary-color);
        font-family: "Fira Code";
        font-size: 17px;
        font-weight: 600;
        height: max-content;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    & div {
        font-size: 24px !important;
    }
`;
