import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;
export const LexicComponentContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    h5 {
        color: #6A6A6A;
        font-size: 17px;
        font-weight: 300;
        margin: 0;
    }
    span {
        color: var(--secondary-color);
        font-size: 17px;
        font-weight: 600;
    }
    & div {
        font-size: 24px !important;
    }
`;
