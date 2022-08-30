import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    padding: 10px 20px;
    ::-webkit-scrollbar {
        background: unset;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 20px;
    }
`;