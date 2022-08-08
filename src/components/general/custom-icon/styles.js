import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50%;
    padding: 8px;
    background-color: ${({ backColor }) => (backColor ? `var(${backColor})` : null)};
    color: ${({ color }) => (color ? `var(${color})` : "#000000")};
    #icon {
        font-size: 35px;
    }
    #XL {
        font-size: 90px;
    }
    #S {
        font-size: 20px;
    }
`;

