import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: ${({ padding = "8px" }) => padding};
    background-color: ${({ backColor }) => (backColor ? `var(${backColor})` : "unset")};
    color: ${({ color }) => (color ? `var(${color})` : "#000000")};
    &.icon {
        font-size: 35px;
    }
    &.XL {
        font-size: 90px;
    }
    &.M {
        font-size: 35px;
        @media (max-height: 650px) {
            font-size: 30px;
        }
    }
    &.S {
        font-size: 20px;
    }
`;