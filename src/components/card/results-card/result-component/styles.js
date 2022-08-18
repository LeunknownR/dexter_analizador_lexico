import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: var(--fifth-color);
    padding: 15px 20px;
    border-radius: 5px;
    & div {
        width: 100%;
        color: #434343;
        :first-child {
            font-weight: 600;
        }
        :nth-child(2) {
            font-weight: 300;
        }
    }
`;
