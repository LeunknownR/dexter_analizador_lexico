import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hr {
        width: 90%;
        border: 1px solid #ECECEC;
        margin-top: -2px;
        margin-bottom: 15px;
    }
`;
export const TextContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
`;