import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    gap: 40px;
    padding-right: 24px;
    & div {
        display: flex;
        justify-content: center;
        border-bottom: 2px solid var(--secondary-color);
        width: 100%;
        padding: 5px 0;
    }
    & h4 {
        color: var(--secondary-color);
        font-weight: 600;
        margin: 0;
    }
`;