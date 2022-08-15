import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    @media (max-width: 1699px) {
        padding-bottom: 61px;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 0 90px 0;
    gap: 20px;
    @media (max-width: 1699px) {
        padding: 23px 0;
    }
`;
