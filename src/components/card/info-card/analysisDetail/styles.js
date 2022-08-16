import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 90%;
    overflow-y: scroll;
    height: 90%;
    gap: 30px;
    ::-webkit-scrollbar {
        background: null;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 20px;
    }
`;
export const ComponentWrapper = styled.div`
    //hmmmmmmmmmmmmmmmmmmmmmmmm
`;

export const OperationRow = styled.div`
    display: flex;
    margin-right: 30px;
    justify-content: space-around;
    align-items: center;
    max-height: 50px;
    h6 {
        font-size: 16px;
        color: var(--black-xd)
    }
`;