import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction = "column" }) => direction};
    row-gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
`;