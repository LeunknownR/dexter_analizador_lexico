import styled, { keyframes } from "styled-components";

export const animationRefresh = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Container = styled.section`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    @media (max-width: 1699px) {
        padding-bottom: 61px;
    }
`;