import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ backColor }) => (backColor ? `var(${backColor})` : null)};
    background-color: ${({ color }) => (color ? `var(${color})` : null)};
    border: none;
    outline: none;
    border-radius: 20px;
    min-width: 130px;
    cursor: pointer;
    padding: 10px 20px;
    gap: 15px;
    font-size: 18px;
    font-weight: 700;
`;

