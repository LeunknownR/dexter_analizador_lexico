import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: var(--back-color-2);
    img {
        user-select: none;
        -webkit-user-drag: none;
    }
`;
export const TitleContainer = styled.div`
    
`;