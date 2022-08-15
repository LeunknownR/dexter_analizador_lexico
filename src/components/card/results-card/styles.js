import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 20px 0 30px 0;
    hr {
        width: 80%;
        border: 1px solid #ececec;
        margin-top: -2px;
        margin-bottom: 15px;
    }
`;
export const Categories = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    gap: 40px;
    padding-right: 24px;
    & div {
        display: flex;
        justify-content: center;
        border-bottom: 2px solid var(--secondary-color);
        width: 100%;
        padding: 5px 0;
    }
    & h4 {
        color: var(--secondary-color);
        font-weight: 600;
        margin: 0;
    }
`;
export const Components = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-top: 20px;
    gap: 10px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        background: null;
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 20px;
    }
`;
export const Component = styled.div`
    display: flex;
    background-color: var(--fifth-color);
    padding: 15px 20px;
    border-radius: 5px;
    & div {
        width: 100%;
    }
`;
