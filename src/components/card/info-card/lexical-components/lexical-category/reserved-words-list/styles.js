import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: 180px;
`;
export const LexicComponentContainer = styled.div`
    display: flex;
    align-items: center;
    h5 {
        margin: 0;
        color: #6a6a6a;
        font-size: 17px;
        font-weight: 300;
    }
    & div {
        color: #6a6a6a;
    }
`;
