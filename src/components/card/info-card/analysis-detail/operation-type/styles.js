import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;  
    width: 40%;  
    gap: 15px;
    overflow: hidden;
`;
export const NewState = styled.h6`
    color: ${({ color }) => color};
    overflow: hidden;
    text-overflow: ellipsis;
`;