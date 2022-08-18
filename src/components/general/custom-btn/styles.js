import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ backColor }) => (backColor ? `var(${backColor})` : 'var(--primary-color)')};
    background-color: ${({ color }) => (color ? `var(${color})` : 'var(--secondary-back-color)')};
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
        background-color: ${({ backColor }) => (backColor ? `var(${backColor})` : 'var(--secondary-back-color)')};
        color: ${({ color }) => (color ? `var(${color})` : 'var(--primary-color)')};
        outline: 1px solid var(--primary-color);
    }
    &:active {
        transform: scale(0.9);
    }
    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;