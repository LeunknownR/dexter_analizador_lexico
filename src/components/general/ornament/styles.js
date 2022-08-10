import styled from "styled-components";

export const Container = styled.div`
    padding: 22.5px 200px;
    display: flex;
    gap: 20px;
    background-color: var(--back-color);
`;
export const Dot = styled.div`
    width: 15px;
    height: 15px;
    background-color: ${({ color }) => (color ? `var(${color})` : null)};
    border-radius: 50%;
`;
