import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 10px;
    &.reserved-container {
        display: flex;
        flex-direction: row;
    }
`;