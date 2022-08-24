import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ backColor = 'var(--primary-color)' }) => `var(${backColor})`};
    background-color: ${({ color = 'var(--secondary-back-color)' }) => `var(${color})`};
    border: none;
    outline: none;
    border-radius: 15px;
    min-width: 130px;
    cursor: pointer;
    padding: 10px 20px;
    gap: 15px;
    font-size: 18px;
    font-weight: 700;
    user-select: none;
    transition: 0.3s;
    &:hover {
        background-color: ${({ backColor = "var(--secondary-back-color)" }) => `var(${backColor})`};
        color: ${({ color = "var(--primary-color)" }) => `var(${color})`};
        outline: 1px solid ${({outline = "var(--black-xd)"}) => `var(${outline})`};
        & div {
            transition: 0.4s;
            color: ${({ backColor = "var(--secondary-back-color)" }) => `var(${backColor})`};
            background-color: ${({ color = "var(--primary-color)" }) => `var(${color})`};
        }
    }
    &:active {
        transform: scale(0.9);
    }
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;