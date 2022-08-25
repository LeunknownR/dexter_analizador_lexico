import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--fifth-color);
    padding: 15px 20px;
    border-radius: 5px;
    gap: 5px;
    & div{
        width: 100%;
        color: #434343;
        overflow: hidden;
        text-overflow: ellipsis;

        :first-child {
            font-weight: 600;
        }
        :nth-child(2) {
            font-weight: 300;
        }
    }
`;
