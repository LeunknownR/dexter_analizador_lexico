import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-color);
    h3 {
        @media (max-width: 1899px){
            font-size: 15px;
        }
    }
`;